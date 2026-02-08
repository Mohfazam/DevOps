import cluster from "cluster";

const num = 100000000000;


if (cluster.isPrimary) {
    console.log("Starting parallel execution...");
    
    const startTime = performance.now();
    
    // Create two workers - neither does calculation in primary
    const worker1 = cluster.fork();
    const worker2 = cluster.fork();
    
    let results = [];
    
    const handleMessage = (data) => {
        results.push(data);
        console.log(`Worker finished in: ${data.time.toFixed(2)} ms`);
        
        // When both workers are done
        if (results.length === 2) {
            const endTime = performance.now();
            const totalTime = endTime - startTime;
            const timeInMinutes = (totalTime / 60000).toFixed(2);
            
            const totalSum = results[0].sum + results[1].sum;
            
            console.log("\n=== RESULTS ===");
            console.log("The Number is: " + num);
            console.log("Total parallel time: " + totalTime.toFixed(2) + " ms (" + timeInMinutes + " minutes)");
            console.log("Total sum: " + totalSum);
            
            worker1.kill();
            worker2.kill();
        }
    };
    
    worker1.on('message', handleMessage);
    worker2.on('message', handleMessage);
    
} else {
    // Determine which half this worker calculates
    const workerId = cluster.worker.id;
    const workerStart = performance.now();
    let sum = 0;
    
    if (workerId === 1) {
        // First worker: 0 to num/2
        for (let i = 0; i < num / 2; i++) {
            sum += i;
        }
    } else {
        // Second worker: num/2 to num
        for (let i = num / 2; i < num; i++) {
            sum += i;
        }
    }
    
    const workerEnd = performance.now();
    const workerTime = workerEnd - workerStart;
    
    process.send({ sum: sum, time: workerTime });
}