export default {
  mixins: [
    {
      methods: {
        log(msg?: string | number): void {
          console.log(msg ? String(msg) : '');
        },
      },
      filters: {
        filterDateTime(val: number): string {
          return `${String(val)}-1`;
        },
      },
    },
  ],
};
