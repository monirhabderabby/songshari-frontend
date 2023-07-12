// remove duplicate from array
function removeDuplicates(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}

// function and check object that if any properties are empty
function checkObject(obj) {
  return Object.keys(obj).filter((key) => {
    const value = obj[key];
    return value === null || value === undefined || value === "";
  });
}

// error message handle and set it on state
function handleCustomMessage(arr, setCustomErrorMessage) {
  let message = [];
  arr.map((item) => {
    message.push(`${item} required in both the Shipping and Billing details`);
    return item;
  });
  setCustomErrorMessage(message);
}

// Checking error , if error return true
function checkError(privacyChecked, shippingDetailes, billingDetailes) {
  if (!privacyChecked) {
    return true;
  }

  let shippingInfoProperties = checkObject(shippingDetailes);
  if (shippingInfoProperties.includes("address2")) {
    shippingInfoProperties = shippingInfoProperties.filter(
      (item) => item !== "address2"
    );
  }

  let billingInfoProperties = checkObject(billingDetailes);
  if (billingInfoProperties.includes("address2")) {
    billingInfoProperties = billingInfoProperties.filter(
      (item) => item !== "address2"
    );
  }

  const errorsArray = [...shippingInfoProperties, ...billingInfoProperties];
  const updatedErrorsArray = removeDuplicates(errorsArray);

  if (updatedErrorsArray.length > 0) {
    return true;
  }
}

function orderItemsToString(arr) {
  return arr?.map(item => {
    return "" + item.product +"-" + item.quantity;
  }).join(" ");
}

export {
  removeDuplicates,
  checkObject,
  checkError,
  handleCustomMessage,
  orderItemsToString,
};
