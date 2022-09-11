function nineTyNine(n,m){
    const table =[]
    for(let i=n;i<=n;i++){
        for(let j=1;j<=m;j++){
            table.push(`${i}x${j}=${i*j}`)
            
        }
        return table
        
    }
}

const numTwo =document.getElementById('num-two')
numTwo.innerText= nineTyNine(2,9)
