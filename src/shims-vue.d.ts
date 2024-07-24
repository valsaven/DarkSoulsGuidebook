declare module '*.vue' {
  import type { defineComponent } from 'vue';

  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.json' {
  const value: string;
  export default value;
}
