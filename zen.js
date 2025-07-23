window.onload = function() {
  console.log("here we are");
  const allowed = [
    "AppTabBar_Home_Link", "AppTabBar_Explore_Link", "AppTabBar_Notifications_Link", "AppTabBar_DirectMessage_Link", "AppTabBar_Profile_Link", "AppTabBar_More_Menu"
  ];
  const nav = document.querySelectorAll("header nav[role=navigation]")[0];
  const items = document.querySelectorAll("header nav[role=navigation] a");
  let newList = "";

  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    if (!allowed.includes(element.getAttribute("data-testid"))) {
      delete items[index];
    } else {
      console.log(items[index].outerHTML)
      newList += items[index].outerHTML;
    }
  }

  nav.innerHTML = newList;
}
