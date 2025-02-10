$(document).ready(function () {
  fetch("json-data.json") // Replace 'data.json' with your file path
    .then((response) => response.json())
    .then((data) => {
      const statesData = data;

      const stateSelect = document.getElementById("stateSelect");
      const citySelect = document.getElementById("citySelect");
      const zipcodeSelect = document.getElementById("zipcodeSelect");

      function populateStates() {
        statesData.states.forEach((state) => {
          const option = document.createElement("option");
          option.value = state.id; // Assuming "id" is the unique identifier for states
          option.text = state.name;
          stateSelect.appendChild(option);
        });
      }

      function populateCities(selectedStateId) {
        citySelect.innerHTML = ""; // Clear previous city options
        citySelect.disabled = true; // Disable city select initially

        const selectedState = statesData.states.find(
          (state) => state.id === selectedStateId
        );
        if (selectedState && selectedState.cities) {
          selectedState.cities.forEach((city) => {
            const option = document.createElement("option");
            option.value = city.id; // Assuming "id" is the unique identifier for cities
            option.text = city.name;
            citySelect.appendChild(option);
          });
          citySelect.disabled = false; // Enable city select if there are cities
        }
      }

      function populateZipcodes(selectedCityId) {
        zipcodeSelect.innerHTML = ""; // Clear previous zipcode options
        zipcodeSelect.disabled = true; // Disable zipcode select initially

        const selectedCity = citySelect.options[citySelect.selectedIndex];
        if (selectedCity && selectedCity.value) {
          const cityId = selectedCity.value;
          const selectedState = statesData.states.find(
            (state) =>
              state.cities && state.cities.some((city) => city.id === cityId)
          );
          if (selectedState && selectedState.cities) {
            const city = selectedState.cities.find(
              (city) => city.id === cityId
            );
            if (city && city.zipcodes) {
              city.zipcodes.forEach((zipcode) => {
                const option = document.createElement("option");
                option.value = zipcode.id; // Assuming "id" is the unique identifier for zipcodes
                option.text = zipcode.zipcode;
                zipcodeSelect.appendChild(option);
              });
              zipcodeSelect.disabled = false; // Enable zipcode select if there are zipcodes
            }
          }
        }
      }

      stateSelect.addEventListener("change", function () {
        const selectedStateId = this.value;
        populateCities(selectedStateId);
        populateZipcodes(); // Reset zipcodes on state change
      });

      citySelect.addEventListener("change", function () {
        populateZipcodes(this.value);
      });
      loadingMessage.style.display = "none"; // Hide loading message on success
      populateStates();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      loadingMessage.textContent =
        "Error loading data. Please try again later.";
      // Optionally, display a retry button here
    });

  // ... (Your existing code for fetching data and populating selects)

  // $('#stateSelect').select2();
  // $('#citySelect').select2();
  // $('#zipcodeSelect').select2();
});
