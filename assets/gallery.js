const photoGrid = document.querySelector(".photo-grid");
const photoDialog = document.querySelector(".photo-dialog");
const enlargedPhoto = photoDialog.querySelector(".enlarged-photo");
const closePhoto = photoDialog.querySelector(".close-photo");
const viewTitle = document.querySelector("#view-title");
const viewPlace = document.querySelector("#view-place");

photoGrid.addEventListener("click", (event) => {
  const link = event.target.closest("figure > a");
  if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  event.preventDefault();
  const figure = link.closest("figure");
  const thumbnail = link.querySelector("img");
  enlargedPhoto.alt = thumbnail.alt;
  enlargedPhoto.src = link.href;
  viewTitle.textContent = figure.querySelector(".photo-title").textContent;
  viewPlace.textContent = figure.querySelector(".photo-place").textContent;
  photoDialog.showModal();
});

closePhoto.addEventListener("click", () => photoDialog.close());
photoDialog.addEventListener("click", (event) => {
  if (event.target === photoDialog) photoDialog.close();
});
photoDialog.addEventListener("close", () => enlargedPhoto.removeAttribute("src"));
