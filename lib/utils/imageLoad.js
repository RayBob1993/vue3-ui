export default function (imageUrl) {
  return new Promise((resolve, reject) => {
    if (!imageUrl) {
      reject();
    }

    const image = new Image();

    image.onload = (event) => {
      resolve({
        event,
        image
      });
    };

    image.onerror = (event) => {
      reject({
        event,
        image
      });
    };


    image.src = imageUrl;
  });
}
