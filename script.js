$(document).ready(function() {

    // $.get("https://www.reddit.com/r/aww/.json").then(function(response){
    //   console.log(response);
    //   addPosts(response.data.children);
    //   console.log(response);
    // });

    var promise = fetchData();
    promise.then(function(response){
      addPosts(response.data.children);
    });
    promise.catch(function(err){
      console.log("oops ", err);
    });

    function fetchData(){
      return $.get("https://www.reddit.com/r/aww/.json");
    }

    function addPosts(posts) {
        // console.log("posts", posts)
        posts.forEach(function(post) {
            // console.log("a post", post);
            var postEl = $("<section>");
            postEl.append( $("<img>").attr("src", post.data.thumbnail) );
            postEl.append( $("<h3>").text(post.data.title) );
            postEl.append( $("<a>").text("Click Here").attr("href", "https://www.reddit.com" + post.data.permalink) );
            $("main").append(postEl);
        })
    }


});
