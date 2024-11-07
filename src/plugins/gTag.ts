import type { App } from 'vue'

interface GtmOptions {
  id: string;
}

export default {
  install(app: App , options: GtmOptions) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${options.id}`;
    script.async = true;
    document.head.appendChild(script);

    // // Opcional: Funções para disparar eventos personalizados
    // window.dataLayer = window.dataLayer || [];
    // function gtag(...args: any[]) {
    //   dataLayer.push(args);
    // }
    // gtag('js', new Date());
    // gtag('config', options.id);
  }
}