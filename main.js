var images = ["https://images-na.ssl-images-amazon.com/images/I/91zbi9M+mKL.jpg", "https://i.pinimg.com/736x/d2/de/95/d2de9556e9eef282d01f208bfb8d5090.jpg", "https://cdn.24.co.za/files/Cms/General/d/5115/072489d36fe54f7691e30e7fe564d55a.png", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Rayhan Harshad", "Abdul Harshad", "Ashly Harshad"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
