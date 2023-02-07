
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
const formArea = document.getElementById("form-file-upload")

const uri_post = getAbsolutePath()+"upload";
const uri_get = getAbsolutePath()+"view/";
const uri_delete = getAbsolutePath()+"delete/"
var nameFile = '';

;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
  })
  
  function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  }


dropArea.addEventListener("dragenter", highlight, false)
dropArea.addEventListener("dragleave", unhighlight, false)
dropArea.addEventListener("drop", handleDrop, false)
inputArea.addEventListener("change", selectFile, false)
inputButton.addEventListener("change", selectFile, false)
buttonCopyLink.addEventListener("click", copy, false)
buttonDeleteFile.addEventListener("click", deleteImage, false)



function highlight() {
    dropArea.classList.add('drag-active')
}

function unhighlight() {
    dropArea.classList.remove('drag-active')
}



async function handleDrop(e) {

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
        contInputLink.value = getAbsolutePath()+"api/image/view/" + nameFile;
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

    request.open("DELETE", uri_delete + nameFile);

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

function getAbsolutePath() {

    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}
