
const inputButton = document.getElementById("input-file-btn");
const inputArea = document.getElementById("input-file-upload");
const dropArea = document.getElementById("label-file-upload");
const progressbar = document.getElementById("progressbar");
const progressbarText = document.getElementById("text-progress")
const contentProgress = document.getElementById("cont-progress")
const contentSuccess = document.getElementById("cont-success")
const contentDragDrop = document.getElementById("cont-dragdrop")
const contImage = document.getElementById("imageUploaded")
const contInputLink = document.getElementById("input-link")
const buttonCopyLink = document.getElementById("button-link")
const buttonDeleteFile = document.getElementById("delete-button")

const uri_post = "http://localhost:8080/upload";
const uri_get = "http://localhost:8080/view/";
const uri_delete = "http://localhost:8080/delete/"
var nameFile='';

dropArea.addEventListener("drop", handleDrop, false)
dropArea.addEventListener("dragenter", highlight, false)
dropArea.addEventListener("dragleave", unhighlight, false)
inputArea.addEventListener("change", selectFile, false)
inputButton.addEventListener("change", selectFile, false)
buttonCopyLink.addEventListener("click", copy, false)
buttonDeleteFile.addEventListener("click", deleteImage, false)



function highlight(e) {
    dropArea.classList.add('drag-active')
}

function unhighlight(e) {
    dropArea.classList.remove('drag-active')
}



async function handleDrop(e) {

    e.preventDefault();
    e.stopPropagation();

    await addImage(e.dataTransfer.files[0])


};

async function selectFile(e) {

    await addImage(e.target.files[0])


};




async function addImage(uploadFile) {

    hiddenDiv(contentDragDrop);

    const file = new FormData();

    file.append('image', uploadFile)

    const request = new XMLHttpRequest();

    request.upload.onprogress = (e) => {

        visibleDiv(contentProgress)

        progressbar.value = Math.round((e.loaded / e.total) * 100);

        progressbarText.textContent = Math.round((e.loaded / e.total) * 100);

        if (Math.round((e.loaded / e.total) * 100) === 100) {

            hiddenDiv(contentProgress);
            visibleDiv(contentSuccess);

        }

    };

    request.onload = () => {

        nameFile = request.response;
        contInputLink.value = uri_get + nameFile;
        contImage.src = uri_get + nameFile;

    }

    request.open("POST", uri_post);

    request.send(file);



}

async function deleteImage() {

    const request = new XMLHttpRequest();

    request.onload = () => {

        alert("Image deleted successfully")
        contInputLink.value = '';
        contImage.src = '';
        hiddenDiv(contentSuccess);
        visibleDiv(contentDragDrop);

    }

    request.open("DELETE", uri_delete + nameFile );

    request.send();



}


function copy() {

    contInputLink.select();

    document.execCommand("copy")

}

function hiddenDiv(div) {

    div.style.visibility = 'hidden';
    div.style.width = '0';
    div.style.position = "absolute";
}

function visibleDiv(div) {

    div.style.visibility = 'visible';
    div.style.width = "auto";
    div.style.position = 'relative';
}


