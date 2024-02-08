export const getHoldingFromApi = async () => {
    return fetch('https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8')
      .then(response => response.json())
      .then(json => {
        return json.userHolding;
      })
      .catch(error => {
        console.error(error);
      });
  };

 