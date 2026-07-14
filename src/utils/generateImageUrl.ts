// filename = wedding_01
// format = jpg | webp
// option = c_fill, w_400

function generateImageUrl({
  filename,
  format,
  cnm,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  cnm: '116' | '455'
  option?: string
}) {
  // return `https://res.cloudinary.com/ds2kluqdi/image/upload/${option}/v1692027253/${format}/${filename}.${format}`
  return `https://res.cloudinary.com/y0qp0xrk/image/upload/${option}/v1783661${cnm}/${filename}_tj.${format}`
}

export default generateImageUrl

// https://res.cloudinary.com/y0qp0xrk/image/upload/v1783661116/wedding_12.jpg
// https://res.cloudinary.com/y0qp0xrk/image/upload/v1783661455/wedding_01.webp
// v1783664764 webp
// v1783663535 jpg
