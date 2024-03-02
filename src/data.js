export const data = () => {
  let dataset = [];
 const image_links = [
    "https://i.ibb.co/QKD9s99/image-0.png",
    "https://i.ibb.co/PNTWQhB/image-1.png",
    "https://i.ibb.co/gwW0pQr/image-2.png",
    "https://i.ibb.co/wLtBHmc/image-3.png",
    "https://i.ibb.co/Kb9w4Q0/image-4.png",
    "https://i.ibb.co/d790RVF/image-5.png",
    "https://i.ibb.co/hWj1Gqw/image-6.png",
    "https://i.ibb.co/cyMK3kB/image-7.png",
    "https://i.ibb.co/8xbgKnV/image-8.png",
    "https://i.ibb.co/GHcHW8m/image-9.png",
    "https://i.ibb.co/jrtjyqX/image-10.png",
    "https://i.ibb.co/k8M4kLX/image-11.png",
    "https://i.ibb.co/2n7G1H2/image-12.png",
    "https://i.ibb.co/w03L1hb/image-13.png",
    "https://i.ibb.co/KjwWjqw/image-14.png",
    "https://i.ibb.co/2MyJRjB/image-15.png",
    "https://i.ibb.co/FD8KcHJ/image-16.png",
    "https://i.ibb.co/sKCHKc4/image-17.png",
    "https://i.ibb.co/Sym0tdW/image-18.png",
    "https://i.ibb.co/dP6P4gP/image-19.png",
    "https://i.ibb.co/qBXsQpr/image-20.png",
    "https://i.ibb.co/Hgt8jRk/image-21.png",
    "https://i.ibb.co/0YLz71y/image-22.png",
    "https://i.ibb.co/WFy4k7S/image-23.png",
    "https://i.ibb.co/gF3mDJM/image-24.png",
    "https://i.ibb.co/vqxbdfk/image-25.png",
    "https://i.ibb.co/2jZHxFc/image-26.png",
    "https://i.ibb.co/f18wG7t/image-27.png",
    "https://i.ibb.co/Xzb5Mfq/image-28.png",
    "https://i.ibb.co/88bsqhp/image-29.png",
    "https://i.ibb.co/s6rc634/image-30.png",
    "https://i.ibb.co/JqS97tn/image-31.png",
    "https://i.ibb.co/pxwY51D/image-32.png",
    "https://i.ibb.co/6bzBTLB/image-33.png",
    "https://i.ibb.co/vq1GfHC/image-34.png",
    "https://i.ibb.co/QpyNP85/image-35.png",
    "https://i.ibb.co/4TLQ8kT/image-36.png",
    "https://i.ibb.co/C0wYszw/image-37.png",
    "https://i.ibb.co/xzwZspz/image-38.png",
    "https://i.ibb.co/bNtnWNk/image-39.png",
    "https://i.ibb.co/hHCVrv7/image-40.png",
    "https://i.ibb.co/N9R6dNn/image-41.png",
    "https://i.ibb.co/qjxgMxm/image-42.png",
    "https://i.ibb.co/Gvk2cN8/image-43.png",
    "https://i.ibb.co/p1yyLK8/image-44.png",
    "https://i.ibb.co/12pMTgY/image-45.png",
    "https://i.ibb.co/wJkxFhq/image-46.png",
    "https://i.ibb.co/NSj1qjj/image-47.png",
    "https://i.ibb.co/fQ8w5Pz/image-48.png",
    "https://i.ibb.co/8DLHYdK/image-49.png",
    "https://i.ibb.co/L1N246Q/image-50.png",
    "https://i.ibb.co/27kH75P/image-51.png",
    "https://i.ibb.co/nDyqpbx/image-52.png",
    "https://i.ibb.co/k23TP9x/image-53.png"
 ];

  for (let i = 0; i < 800; i++) {
    const x = Math.floor(Math.random() * 800);
    const y = Math.floor(Math.random() * 600);
    const imageUrl = image_links[i];
    dataset.push({ "id": i, "x": x, "y": y, "url": imageUrl, "insights": `Insights about Image ${i}` });
  }
  return dataset;
}
