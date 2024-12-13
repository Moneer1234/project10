var bookmarkName = document.getElementById('bookmarkName')
var bookmarkURL = document.getElementById('bookmarkURL')
var addBtn = document.getElementById('addBtn')
// array
var productList = [];

// local storge
if (localStorage.getItem('product') !== null) {
    productList = JSON.parse(localStorage.getItem('product'));
    displayproduct()
}

addBtn.onclick = restform;
addBtn.onclick = addproduct;
//function
function addproduct() {
    //object
    var product = {
        pName: bookmarkName.value,
        pURL: bookmarkURL.value,
    }
    productList.push(product)
    // local storge
    localStorage.setItem('product', JSON.stringify(productList));
    displayproduct();
    restform();
    console.log('object', product)
    console.log('array', productList)
}

// display
function displayproduct() {
    var cartoon = ``;
    for (var i = 0; i < productList.length; i++) {
        cartoon += `<tr>
                <td class="py-3">${i+1}</td>
                <td>${productList[i].pName}</td>
                <td>
                 <button style=" background-color: rgb(57, 172, 44);"  onclick="visit(${i})" class=" w-50 btn  my-2">Visit<i class="fa-solid fa-eye pe-2"></i></button>

                </td>
                <td>
                   <button  style=" background-color: rgb(182, 33, 7);" onclick="deleteProduct(${i})" class=" w-50 btn  my-2">Delete <i class="fa fa-trash"></i></button>
                </td>
              </tr>
`
    }
    document.getElementById('tableContent').innerHTML = cartoon
}

// clear
function restform() {
    bookmarkName.value = null;
    bookmarkURL.value = null;
}

// delete
function deleteProduct(index) {
    productList.splice(index, 1);
    displayproduct();
    localStorage.setItem('product', JSON.stringify(productList));
}

// visit
function visit(i) {
window.open(productList[i].pURL )
}

