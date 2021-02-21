const randomizedQuickSort = (A, p, r) => {
    if(p<=r) {
      let q = randomizedPartition(A, p, r)
      randomizedQuickSort(A, p, q-1)
      randomizedQuickSort(A, q+1, r)
    }
  }
  
  const randomizedPartition = (A, p, r) => { 
    let i = Math.floor(Math.random() * (r - p + 1) + p)
    let temp = A[r]
    A[r] = A[i]
    A[i] = temp
    return partition(A, p, r)
  }
  
  const partition = (A, p, r) => {
    let x = A[r];
    let i = p-1;
    for (let j=p; j< r; j++) {
      if (A[j] < x) {
        i = i + 1;
        let temp = A[i]
        A[i] = A[j]
        A[j] = temp
      }
    }
    let temp = A[i+1]
    A[i+1] = A[r]
    A[r] = temp
    return i+1
  }
  
  //RANDOMIZED-QUICKSORT`
  const modifiedRandomizedQuickSort = (A, p, r) => {
    if(p<=r) {
      let [q, t] = modifiedRandomizedPartition(A, p, r)
      modifiedRandomizedQuickSort(A, p, q-1)
      modifiedRandomizedQuickSort(A, t+1, r)
    }
  }
  
  //RANDOMIZED-PARTITION`
  const modifiedRandomizedPartition = (A, p, r) => { 
    let i = Math.floor(Math.random() * (r - p + 1) + p)
    let temp = A[r]
    A[r] = A[i]
    A[i] = temp
    return modifiedPartition(A, p, r)
  }
  
  // PARTITION`
  const modifiedPartition = (A, p, r) => {
   let x = A[r];
    let q = p-1;
    let t = p-1;
    for (let j=p; j< r; j++) {
      if (A[j] < x) {
        q = q + 1;
        let temp = A[q]
        A[q] = A[j]
        A[j] = temp
      }
    }
    let temp = A[q+1]
    A[q+1] = A[r]
    A[r] = temp
    q++
    t=q
    for(let temp = t; temp<r; temp++) {
      if(A[t+1] === A[q]) {
        t++
      }
    }
    return [q, t]
  }
  
  module.exports = {
    randomizedQuickSort,
    modifiedPartition,
    partition,
    modifiedRandomizedQuickSort
  }