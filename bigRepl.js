// repl.js
import { style } from './styles.js';
import repl from 'node:repl';
import util from 'node:util';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom'; // Import JSDOM

// ... (rest of the __filename, __dirname, and DATA_STRUCTURES_DIR code remains the same)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_STRUCTURES_DIR = path.join(__dirname, 'data-structures');

// Function to dynamically import all specified modules and add to context
async function loadDataStructures(context) {
    const filesToImport = [
        '/data-structures/dijkstra/Dijkstras.js',
        '/data-structures/graph/Graph.js',
        '/data-structures/hashmap/HashMap.js',
        '/data-structures/heap/MinHeap.js',
        '/data-structures/heap/MaxHeap.js',
        '/data-structures/linked-lists/singly-linked-list/LinkedList.js',
        '/data-structures/priority-queue/PriorityQueue.js',
        '/data-structures/queue/Queue.js',
        '/data-structures/stack/Stack.js',
        '/data-structures/tree/TreeNode.js',
        '/data-structures/tree/BinaryTree.js',
        '/data-structures/sorting-algos/bubbleSort.js',
        '/data-structures/sorting-algos/getX.js',
        '/data-structures/sorting-algos/mergeSort.js',
        '/data-structures/sorting-algos/quickSort.js'
    ];

    // Named exports handled separately
    const namedExportsFile = '/data-structures/sorting-algos/binarySearch.js';
    
    // Track loaded module names
    const loadedModules = [];

    for (const relativePath of filesToImport) {
        const fullPath = path.join(__dirname, relativePath);
        // Ensure path uses file:// protocol for dynamic import
        const modulePath = `file://${fullPath}`; 
        
        try {
            const module = await import(modulePath);
            // Extract the default export
            // Use the filename (without extension) as the context key (e.g., 'Dijkstras')
            const fileName = path.basename(relativePath, path.extname(relativePath));
            context[fileName] = module.default;
            loadedModules.push(fileName);
        } catch (error) {
            console.error(`Failed to import ${relativePath}: ${error.message}`);
        }
    }
    
    // Handle named exports for binarySearch.js
    const binarySearchPath = `file://${path.join(__dirname, namedExportsFile)}`;
    try {
        const binarySearchModule = await import(binarySearchPath);
        context.binarySearchIterative = binarySearchModule.binarySearchIterative;
        context.binarySearchRecursive = binarySearchModule.binarySearchRecursive;
        loadedModules.push('binarySearchIterative', 'binarySearchRecursive');
    } catch (error) {
        console.error(`Failed to import named exports from ${namedExportsFile}: ${error.message}`);
    }

    console.log(`\nSuccessfully loaded modules: ${loadedModules.join(', ')}\n`);
}

// Function to load JSDOM into the REPL context
function loadJSDOM(context) {
    context.JSDOM = JSDOM;
    console.log('JSDOM class loaded into context.');
}

// --- Start REPL and Expose Context ---

const replServer = repl.start({
    prompt: '\x1b[38;2;255;0;255m▶ \x1b[0m',
    writer: (output) => {
        return util.inspect(output, { compact: true, breakLength: Infinity, colors: true });
    }
});

// Load data structures into the REPL context asynchronously
await loadDataStructures(replServer.context);

// Load JSDOM into the REPL context
loadJSDOM(replServer.context);

console.log(`Welcome to ${style.cyan,style.bold}@tjupps${style.reset} REPL! Data structures and JSDOM loaded.`);

// --- Initialize JSDOM variables for immediate use ---

// Create an initial virtual DOM structure
const dom = new JSDOM(`<!DOCTYPE html><html><body><h1>REPL DOM!</h1></body></html>`);

// Expose 'window', 'document', and 'body' to the REPL context
replServer.context.window = dom.window;
replServer.context.document = dom.window.document;
replServer.context.body = dom.window.document.body;
replServer.context.JSDOM = JSDOM; // Ensure JSDOM class is also available if needed for new DOMs

console.log(`A 'document' and 'window' are ready to use. 
Try: ${style.purple}const div = document.createElement('div'); div.textContent = 'Check me out Son!'; document.body.appendChild(div); document.body.innerHTML${style.reset}`
);

// Example usage might look like:
// const list = new LinkedList();
// list.add(5);
// list; // to see the object structure

