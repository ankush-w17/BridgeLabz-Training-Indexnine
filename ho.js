function patientsBeforeX(queue, X) {
  let count = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    const hasHigher = queue.some(p => p.severity > current.severity);

    if (hasHigher) {
      queue.push(current);
    } else {
      count++;

      if (current.id === X) {
        return count - 1; 
      }
    }
  }
}

const queue = [
  { id: 1, severity: 3 },
  { id: 2, severity: 5 },
  { id: 3, severity: 5 },
  { id: 4, severity: 2 }
];

const X = 3;

console.log(patientsBeforeX(queue, X));  
