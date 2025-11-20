// repl.js
import repl from 'node:repl';
import util from 'node:util';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Helper to get __dirname equivalent in ES Modules
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
        '/data-structures/tree/binaryTree.js',
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


// --- Start REPL and Expose Context ---

const replServer = repl.start({
    prompt: '\x1b[38;2;255;0;255m▶ \x1b[0m',
    writer: (output) => {
        return util.inspect(output, { compact: true, breakLength: Infinity, colors: true });
    }
});

// Load data structures into the REPL context asynchronously
await loadDataStructures(replServer.context);

console.log("Welcome to @tjupps REPL! Data structures loaded.");

// Example usage might look like:
// const list = new LinkedList();
// list.add(5);
// list; // to see the object structure

