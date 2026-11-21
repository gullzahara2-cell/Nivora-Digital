export const site = {
  name: 'Nivora Digital',
  email: 'nivoradigital1029@gmail.com ',   
  phone: '+92 3288699236',        
  whatsapp: '03288699236',        
          
}
export const waLink = (msg = 'Hello Nivora Digital, I would like to know more about your services.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`