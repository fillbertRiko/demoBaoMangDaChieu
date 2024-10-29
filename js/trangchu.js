document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    let timeout;
    let showTimeout;
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseenter', function() {
        clearTimeout(timeout); // Xóa bỏ timeout khi hover
        clearTimeout(showTimeout); // Xóa bỏ showTimeout nếu có
        dropdownContent.style.display = 'block'; // Hiển thị dropdown
        dropdownContent.style.opacity = '1'; // Đặt độ mờ thành 1
        dropdownContent.style.transition = 'opacity .1s ease'; // Hiệu ứng mở dần
    });

    dropdown.addEventListener('mouseleave', function() {
        // Ẩn dropdown sau 300ms với độ trễ
        timeout = setTimeout(function() {
            dropdownContent.style.opacity = '0'; // Đặt độ mờ thành 0 để ẩn
            dropdownContent.style.transition = 'opacity .1s ease'; // Hiệu ứng tắt dần
            setTimeout(function() {
                dropdownContent.style.display = 'none'; // Ẩn dropdown
            }, 300); // Thời gian ẩn sau 300ms
        }, 300); // Độ trễ 300ms trước khi ẩn
    });
});

function searchTag(tag) {
    // Xử lý tìm kiếm theo hashtag
    // Ví dụ: điều hướng đến trang kết quả tìm kiếm cho thẻ đó
    console.log("Searching for:", tag);
    // Bạn có thể thay đổi URL hoặc gọi hàm tìm kiếm của riêng bạn ở đây
    // window.location.href = '/search?tag=' + encodeURIComponent(tag);
}


const clearIcon = document.querySelector(".clear-icon");
const searchBar = document.querySelector(".search");

searchBar.addEventListener("keyup", () => {
  if(searchBar.value && clearIcon.style.visibility != "visible"){
    clearIcon.style.visibility = "visible";
  } else if(!searchBar.value) {
    clearIcon.style.visibility = "hidden";
  }
});

clearIcon.addEventListener("click", () => {
  searchBar.value = "";
  clearIcon.style.visibility = "hidden";
})
