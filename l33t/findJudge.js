// https://leetcode.com/problems/find-the-town-judge/
// https://leetcode.com/u/MarkSPhilip31/
// https://leetcode.com/problems/find-the-town-judge/solutions/4764873/beats-98-users-c-java-python-javascript-explained
// https://leetcode.com/problems/find-the-town-judge/
// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
//
// If the town judge exists, then:
//
// The town judge trusts nobody.  Everybody (except for the town judge) trusts
// the town judge.  There is exactly one person that satisfies properties 1 and
// 2.  You are given an array trust where trust[i] = [ai, bi] representing that
// the person labeled ai trusts the person labeled bi. If a trust relationship
// does not exist in trust array, then such a trust relationship does not
// exist.
//
// Return the label of the town judge if the town judge exists and can be
// identified, or return -1 otherwise.

var findJudge = function(N, trust) {
    const inDegree = new Array(N + 1).fill(0);
    const outDegree = new Array(N + 1).fill(0);
    for (let a of trust) {
        outDegree[a[0]]++;
        inDegree[a[1]]++;
    }
    console.log('(truster)', outDegree);
    console.log('(trusted)', inDegree);
    for (let i = 1; i <= N; ++i) {
        if (inDegree[i] === N - 1 && outDegree[i] === 0) {
            console.log(i);
            return i;
        }
    }
    console.log(-1);
    return -1;
};

export {findJudge};

