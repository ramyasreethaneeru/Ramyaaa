document.addEventListener("DOMContentLoaded", function() {
    const postForm = document.getElementById("post-form");
    const postsSection = document.getElementById("posts");

    postForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        const photoInput = document.getElementById("photo");

        if (title.trim() === "" || content.trim() === "") {
            alert("Please fill in both title and content.");
            return;
        }

        const photo = photoInput.files.length > 0 ? URL.createObjectURL(photoInput.files[0]) : null;

        createPost(title, content, photo);
        postForm.reset();
    });

    function createPost(title, content, photo) {
        const article = document.createElement("article");
        const postTitle = document.createElement("h3");
        const postContent = document.createElement("p");

        postTitle.textContent = title;
        postContent.textContent = content;

        if (photo) {
            const postPhoto = document.createElement("img");
            postPhoto.src = photo;
            postPhoto.alt = "Post Photo";
            article.appendChild(postPhoto);
        }

        article.appendChild(postTitle);
        article.appendChild(postContent);

        postsSection.appendChild(article);
    }

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    }
});
