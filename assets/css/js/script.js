let buttonPrimary = document.getElementById("primary");
let buttonSecondary = document.getElementById("secondary");
let row = document.getElementById("row");

let card = document.getElementById("card");

const createCard = function (item) {
  row.innerHTML += `
    
    <div class="col-md-4"  >
            <div class="card  mb-4 shadow-sm">
            <img src="${item.src.original}">
              <div class="card-body">
                <h5 class="card-title">${item.alt}</h5>
                <p class="card-text">
                  ${item.photographer}
                </p>
                <p class="card-text">
                <a href="${item.photographer_url}" class="btn btn-sm btn-outline-primary"> Link fotografo </a>
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button"  id="hide" class="hide btn btn-sm btn-outline-secondary">
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">${item.id}</small>
                </div>
              </div>
            </div>
          </div>`;
};
