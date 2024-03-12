// Ads are identified by the text "promoted" in the span element
function removePromotedPosts() {
    const allAds = document.querySelectorAll('shreddit-ad-post');
    let removed = allAds.length;

    allAds.forEach(a => a.remove())

    if (removed > 0) {
        console.log(`Promoted posts removed! 🎉 (${removed})`);
    }
}

// Remove promoted posts on initial page load
removePromotedPosts();

const observer = new MutationObserver(() => {
    removePromotedPosts();
});

const targetNode = document.body;
const observerOptions = {
    childList: true,
    subtree: true,
};

observer.observe(targetNode, observerOptions);
