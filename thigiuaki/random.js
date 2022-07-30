document.getElementById("def").onclick = () => 
{
    const M = ["Đoàn Thị Thảo Nhung", "Nguyễn Phạm Hồng Ngọc", "Nguyễn Hải Nam", "Nguyễn Đình Hiếu"];
    const o = Math.round(Math.random()*3);
    document.getElementById("abc").innerHTML = M[o];
}