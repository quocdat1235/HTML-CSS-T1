// `https://dummyjson.com/products/category/${value}` 

const API_CATEGORY = 'https://dummyjson.com/products/category-list';
const API_CATEGORY1 = 'https://dummyjson.com/products/category'
const list_category = document.getElementById("list_category");
const box_category = document.querySelector(".box_category");
const title = document.getElementById("title");

const fetchDatAllcategory = () => {
    fetch(API_CATEGORY,{
        method: "GET",
    }).then((res) => {
        // console.log(res.json());
        return res.json();
    })
    .then(data => {renderCategory(data)})
    .catch(err => console.log(err));
}
fetchDatAllcategory();

const renderCategory = (data) => {
    // console.log(data,"da");
    handlButton(data[0]);
    list_category.innerHTML = data.map(item => {
        //truyền 1 chuỗi vào thì sẽ k bị lỗi
        return `
         <button class="" onclick="handlButton('${item}')">${item}</button>
        `
    }).join('');
}

const handlButton = (value) => {
    // console.log(value,"value");
    fetch(`${API_CATEGORY1}/${value}`)
    .then(res => {
        return res.json();
    })
    .then(data => renderButtonCategory(data.products,data.total))
    .catch(err => console.log(err))
}

const renderButtonCategory = (products = [],cartName) => {
    title.innerText = `Tổng: ${cartName}`
    box_category.innerHTML = products.map(product => {
        return `
           <div class="item_product">
                <div class="box_img">
                    <img src=${product.thumbnail} />
                </div>
                <p>Tên sản phẩm: ${product.title}</p>
                <p>Danh mục: ${product.category}</p>
                <p>Giá: ${product.price}</p>
           </div>
        `
    }).join("");
}