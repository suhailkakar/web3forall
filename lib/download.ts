const download = async (url: string, name: string) => {
  const response = await fetch(url);
  const blob = (await response.blob()) as Blob;
  const image = await createImageBitmap(blob);

  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;

  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  ctx.fillStyle = "#0a0a0a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(image, 0, 0);

  canvas.toBlob((blob) => {
    if (blob) {
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    }
  });
};

export { download };
