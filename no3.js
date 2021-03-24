const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (nilaiAkhir < nilaiAwal) {
    console.log('Nilai akhir harus lebih besar dari nilai awal ');
  } else {
    if (dataArray.length < 5) {
      console.log('Jumlah data dalam array harus lebih dari 5')
    } else{
      const sort = dataArray.sort((a, b) => { return a - b })
      const array = sort.filter(a => {
        return a > nilaiAwal && a < nilaiAkhir
      })
      if(array.length === 0) {
        console.log('Jumlah angka dalam dataArray tidak ada')
      } else {
        console.log(array)
      }
    }
  }
}
seleksiNilai(10,30,[10,11,21,12,25])

