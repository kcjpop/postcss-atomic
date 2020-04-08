
const { newSheet, run } = require('../testHelpers')

describe('@margin', () => {
  it('should generate all rules', async () => {
    let src = newSheet`@margin;`

    let expected = newSheet`
.m-0 {
  margin: 0;
}
.m-1 {
  margin: calc(1 * var(--margin-scale));
}
.m-2 {
  margin: calc(2 * var(--margin-scale));
}
.m-3 {
  margin: calc(3 * var(--margin-scale));
}
.m-4 {
  margin: calc(4 * var(--margin-scale));
}
.m-5 {
  margin: calc(5 * var(--margin-scale));
}
.m-6 {
  margin: calc(6 * var(--margin-scale));
}
.m-8 {
  margin: calc(8 * var(--margin-scale));
}
.m-10 {
  margin: calc(10 * var(--margin-scale));
}
.m-12 {
  margin: calc(12 * var(--margin-scale));
}
.m-16 {
  margin: calc(16 * var(--margin-scale));
}
.m-20 {
  margin: calc(20 * var(--margin-scale));
}
.m-24 {
  margin: calc(24 * var(--margin-scale));
}
.m-32 {
  margin: calc(32 * var(--margin-scale));
}
.m-40 {
  margin: calc(40 * var(--margin-scale));
}
.m-48 {
  margin: calc(48 * var(--margin-scale));
}
.m-56 {
  margin: calc(56 * var(--margin-scale));
}
.m-64 {
  margin: calc(64 * var(--margin-scale));
}
.m-px {
  margin: 1px;
}
.m-auto {
  margin: auto;
}
.mt-0 {
  margin-top: 0;
}
.mt-1 {
  margin-top: calc(1 * var(--margin-scale));
}
.mt-2 {
  margin-top: calc(2 * var(--margin-scale));
}
.mt-3 {
  margin-top: calc(3 * var(--margin-scale));
}
.mt-4 {
  margin-top: calc(4 * var(--margin-scale));
}
.mt-5 {
  margin-top: calc(5 * var(--margin-scale));
}
.mt-6 {
  margin-top: calc(6 * var(--margin-scale));
}
.mt-8 {
  margin-top: calc(8 * var(--margin-scale));
}
.mt-10 {
  margin-top: calc(10 * var(--margin-scale));
}
.mt-12 {
  margin-top: calc(12 * var(--margin-scale));
}
.mt-16 {
  margin-top: calc(16 * var(--margin-scale));
}
.mt-20 {
  margin-top: calc(20 * var(--margin-scale));
}
.mt-24 {
  margin-top: calc(24 * var(--margin-scale));
}
.mt-32 {
  margin-top: calc(32 * var(--margin-scale));
}
.mt-40 {
  margin-top: calc(40 * var(--margin-scale));
}
.mt-48 {
  margin-top: calc(48 * var(--margin-scale));
}
.mt-56 {
  margin-top: calc(56 * var(--margin-scale));
}
.mt-64 {
  margin-top: calc(64 * var(--margin-scale));
}
.mt-px {
  margin-top: 1px;
}
.mt-auto {
  margin-top: auto;
}
.mr-0 {
  margin-right: 0;
}
.mr-1 {
  margin-right: calc(1 * var(--margin-scale));
}
.mr-2 {
  margin-right: calc(2 * var(--margin-scale));
}
.mr-3 {
  margin-right: calc(3 * var(--margin-scale));
}
.mr-4 {
  margin-right: calc(4 * var(--margin-scale));
}
.mr-5 {
  margin-right: calc(5 * var(--margin-scale));
}
.mr-6 {
  margin-right: calc(6 * var(--margin-scale));
}
.mr-8 {
  margin-right: calc(8 * var(--margin-scale));
}
.mr-10 {
  margin-right: calc(10 * var(--margin-scale));
}
.mr-12 {
  margin-right: calc(12 * var(--margin-scale));
}
.mr-16 {
  margin-right: calc(16 * var(--margin-scale));
}
.mr-20 {
  margin-right: calc(20 * var(--margin-scale));
}
.mr-24 {
  margin-right: calc(24 * var(--margin-scale));
}
.mr-32 {
  margin-right: calc(32 * var(--margin-scale));
}
.mr-40 {
  margin-right: calc(40 * var(--margin-scale));
}
.mr-48 {
  margin-right: calc(48 * var(--margin-scale));
}
.mr-56 {
  margin-right: calc(56 * var(--margin-scale));
}
.mr-64 {
  margin-right: calc(64 * var(--margin-scale));
}
.mr-px {
  margin-right: 1px;
}
.mr-auto {
  margin-right: auto;
}
.mb-0 {
  margin-bottom: 0;
}
.mb-1 {
  margin-bottom: calc(1 * var(--margin-scale));
}
.mb-2 {
  margin-bottom: calc(2 * var(--margin-scale));
}
.mb-3 {
  margin-bottom: calc(3 * var(--margin-scale));
}
.mb-4 {
  margin-bottom: calc(4 * var(--margin-scale));
}
.mb-5 {
  margin-bottom: calc(5 * var(--margin-scale));
}
.mb-6 {
  margin-bottom: calc(6 * var(--margin-scale));
}
.mb-8 {
  margin-bottom: calc(8 * var(--margin-scale));
}
.mb-10 {
  margin-bottom: calc(10 * var(--margin-scale));
}
.mb-12 {
  margin-bottom: calc(12 * var(--margin-scale));
}
.mb-16 {
  margin-bottom: calc(16 * var(--margin-scale));
}
.mb-20 {
  margin-bottom: calc(20 * var(--margin-scale));
}
.mb-24 {
  margin-bottom: calc(24 * var(--margin-scale));
}
.mb-32 {
  margin-bottom: calc(32 * var(--margin-scale));
}
.mb-40 {
  margin-bottom: calc(40 * var(--margin-scale));
}
.mb-48 {
  margin-bottom: calc(48 * var(--margin-scale));
}
.mb-56 {
  margin-bottom: calc(56 * var(--margin-scale));
}
.mb-64 {
  margin-bottom: calc(64 * var(--margin-scale));
}
.mb-px {
  margin-bottom: 1px;
}
.mb-auto {
  margin-bottom: auto;
}
.ml-0 {
  margin-left: 0;
}
.ml-1 {
  margin-left: calc(1 * var(--margin-scale));
}
.ml-2 {
  margin-left: calc(2 * var(--margin-scale));
}
.ml-3 {
  margin-left: calc(3 * var(--margin-scale));
}
.ml-4 {
  margin-left: calc(4 * var(--margin-scale));
}
.ml-5 {
  margin-left: calc(5 * var(--margin-scale));
}
.ml-6 {
  margin-left: calc(6 * var(--margin-scale));
}
.ml-8 {
  margin-left: calc(8 * var(--margin-scale));
}
.ml-10 {
  margin-left: calc(10 * var(--margin-scale));
}
.ml-12 {
  margin-left: calc(12 * var(--margin-scale));
}
.ml-16 {
  margin-left: calc(16 * var(--margin-scale));
}
.ml-20 {
  margin-left: calc(20 * var(--margin-scale));
}
.ml-24 {
  margin-left: calc(24 * var(--margin-scale));
}
.ml-32 {
  margin-left: calc(32 * var(--margin-scale));
}
.ml-40 {
  margin-left: calc(40 * var(--margin-scale));
}
.ml-48 {
  margin-left: calc(48 * var(--margin-scale));
}
.ml-56 {
  margin-left: calc(56 * var(--margin-scale));
}
.ml-64 {
  margin-left: calc(64 * var(--margin-scale));
}
.ml-px {
  margin-left: 1px;
}
.ml-auto {
  margin-left: auto;
}
.mx-0 {
  margin-left: 0;
  margin-right: 0;
}
.mx-1 {
  margin-left: calc(1 * var(--margin-scale));
  margin-right: calc(1 * var(--margin-scale));
}
.mx-2 {
  margin-left: calc(2 * var(--margin-scale));
  margin-right: calc(2 * var(--margin-scale));
}
.mx-3 {
  margin-left: calc(3 * var(--margin-scale));
  margin-right: calc(3 * var(--margin-scale));
}
.mx-4 {
  margin-left: calc(4 * var(--margin-scale));
  margin-right: calc(4 * var(--margin-scale));
}
.mx-5 {
  margin-left: calc(5 * var(--margin-scale));
  margin-right: calc(5 * var(--margin-scale));
}
.mx-6 {
  margin-left: calc(6 * var(--margin-scale));
  margin-right: calc(6 * var(--margin-scale));
}
.mx-8 {
  margin-left: calc(8 * var(--margin-scale));
  margin-right: calc(8 * var(--margin-scale));
}
.mx-10 {
  margin-left: calc(10 * var(--margin-scale));
  margin-right: calc(10 * var(--margin-scale));
}
.mx-12 {
  margin-left: calc(12 * var(--margin-scale));
  margin-right: calc(12 * var(--margin-scale));
}
.mx-16 {
  margin-left: calc(16 * var(--margin-scale));
  margin-right: calc(16 * var(--margin-scale));
}
.mx-20 {
  margin-left: calc(20 * var(--margin-scale));
  margin-right: calc(20 * var(--margin-scale));
}
.mx-24 {
  margin-left: calc(24 * var(--margin-scale));
  margin-right: calc(24 * var(--margin-scale));
}
.mx-32 {
  margin-left: calc(32 * var(--margin-scale));
  margin-right: calc(32 * var(--margin-scale));
}
.mx-40 {
  margin-left: calc(40 * var(--margin-scale));
  margin-right: calc(40 * var(--margin-scale));
}
.mx-48 {
  margin-left: calc(48 * var(--margin-scale));
  margin-right: calc(48 * var(--margin-scale));
}
.mx-56 {
  margin-left: calc(56 * var(--margin-scale));
  margin-right: calc(56 * var(--margin-scale));
}
.mx-64 {
  margin-left: calc(64 * var(--margin-scale));
  margin-right: calc(64 * var(--margin-scale));
}
.mx-px {
  margin-left: 1px;
  margin-right: 1px;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-0 {
  margin-top: 0;
  margin-bottom: 0;
}
.my-1 {
  margin-top: calc(1 * var(--margin-scale));
  margin-bottom: calc(1 * var(--margin-scale));
}
.my-2 {
  margin-top: calc(2 * var(--margin-scale));
  margin-bottom: calc(2 * var(--margin-scale));
}
.my-3 {
  margin-top: calc(3 * var(--margin-scale));
  margin-bottom: calc(3 * var(--margin-scale));
}
.my-4 {
  margin-top: calc(4 * var(--margin-scale));
  margin-bottom: calc(4 * var(--margin-scale));
}
.my-5 {
  margin-top: calc(5 * var(--margin-scale));
  margin-bottom: calc(5 * var(--margin-scale));
}
.my-6 {
  margin-top: calc(6 * var(--margin-scale));
  margin-bottom: calc(6 * var(--margin-scale));
}
.my-8 {
  margin-top: calc(8 * var(--margin-scale));
  margin-bottom: calc(8 * var(--margin-scale));
}
.my-10 {
  margin-top: calc(10 * var(--margin-scale));
  margin-bottom: calc(10 * var(--margin-scale));
}
.my-12 {
  margin-top: calc(12 * var(--margin-scale));
  margin-bottom: calc(12 * var(--margin-scale));
}
.my-16 {
  margin-top: calc(16 * var(--margin-scale));
  margin-bottom: calc(16 * var(--margin-scale));
}
.my-20 {
  margin-top: calc(20 * var(--margin-scale));
  margin-bottom: calc(20 * var(--margin-scale));
}
.my-24 {
  margin-top: calc(24 * var(--margin-scale));
  margin-bottom: calc(24 * var(--margin-scale));
}
.my-32 {
  margin-top: calc(32 * var(--margin-scale));
  margin-bottom: calc(32 * var(--margin-scale));
}
.my-40 {
  margin-top: calc(40 * var(--margin-scale));
  margin-bottom: calc(40 * var(--margin-scale));
}
.my-48 {
  margin-top: calc(48 * var(--margin-scale));
  margin-bottom: calc(48 * var(--margin-scale));
}
.my-56 {
  margin-top: calc(56 * var(--margin-scale));
  margin-bottom: calc(56 * var(--margin-scale));
}
.my-64 {
  margin-top: calc(64 * var(--margin-scale));
  margin-bottom: calc(64 * var(--margin-scale));
}
.my-px {
  margin-top: 1px;
  margin-bottom: 1px;
}
.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}
.-m-1 {
  margin: calc(-1 * var(--margin-scale));
}
.-m-2 {
  margin: calc(-2 * var(--margin-scale));
}
.-m-3 {
  margin: calc(-3 * var(--margin-scale));
}
.-m-4 {
  margin: calc(-4 * var(--margin-scale));
}
.-m-5 {
  margin: calc(-5 * var(--margin-scale));
}
.-m-6 {
  margin: calc(-6 * var(--margin-scale));
}
.-m-8 {
  margin: calc(-8 * var(--margin-scale));
}
.-m-10 {
  margin: calc(-10 * var(--margin-scale));
}
.-m-12 {
  margin: calc(-12 * var(--margin-scale));
}
.-m-16 {
  margin: calc(-16 * var(--margin-scale));
}
.-m-20 {
  margin: calc(-20 * var(--margin-scale));
}
.-m-24 {
  margin: calc(-24 * var(--margin-scale));
}
.-m-32 {
  margin: calc(-32 * var(--margin-scale));
}
.-m-40 {
  margin: calc(-40 * var(--margin-scale));
}
.-m-48 {
  margin: calc(-48 * var(--margin-scale));
}
.-m-56 {
  margin: calc(-56 * var(--margin-scale));
}
.-m-64 {
  margin: calc(-64 * var(--margin-scale));
}
.-m-px {
  margin: -1px;
}
.-mt-1 {
  margin-top: calc(-1 * var(--margin-scale));
}
.-mt-2 {
  margin-top: calc(-2 * var(--margin-scale));
}
.-mt-3 {
  margin-top: calc(-3 * var(--margin-scale));
}
.-mt-4 {
  margin-top: calc(-4 * var(--margin-scale));
}
.-mt-5 {
  margin-top: calc(-5 * var(--margin-scale));
}
.-mt-6 {
  margin-top: calc(-6 * var(--margin-scale));
}
.-mt-8 {
  margin-top: calc(-8 * var(--margin-scale));
}
.-mt-10 {
  margin-top: calc(-10 * var(--margin-scale));
}
.-mt-12 {
  margin-top: calc(-12 * var(--margin-scale));
}
.-mt-16 {
  margin-top: calc(-16 * var(--margin-scale));
}
.-mt-20 {
  margin-top: calc(-20 * var(--margin-scale));
}
.-mt-24 {
  margin-top: calc(-24 * var(--margin-scale));
}
.-mt-32 {
  margin-top: calc(-32 * var(--margin-scale));
}
.-mt-40 {
  margin-top: calc(-40 * var(--margin-scale));
}
.-mt-48 {
  margin-top: calc(-48 * var(--margin-scale));
}
.-mt-56 {
  margin-top: calc(-56 * var(--margin-scale));
}
.-mt-64 {
  margin-top: calc(-64 * var(--margin-scale));
}
.-mt-px {
  margin-top: -1px;
}
.-mr-1 {
  margin-right: calc(-1 * var(--margin-scale));
}
.-mr-2 {
  margin-right: calc(-2 * var(--margin-scale));
}
.-mr-3 {
  margin-right: calc(-3 * var(--margin-scale));
}
.-mr-4 {
  margin-right: calc(-4 * var(--margin-scale));
}
.-mr-5 {
  margin-right: calc(-5 * var(--margin-scale));
}
.-mr-6 {
  margin-right: calc(-6 * var(--margin-scale));
}
.-mr-8 {
  margin-right: calc(-8 * var(--margin-scale));
}
.-mr-10 {
  margin-right: calc(-10 * var(--margin-scale));
}
.-mr-12 {
  margin-right: calc(-12 * var(--margin-scale));
}
.-mr-16 {
  margin-right: calc(-16 * var(--margin-scale));
}
.-mr-20 {
  margin-right: calc(-20 * var(--margin-scale));
}
.-mr-24 {
  margin-right: calc(-24 * var(--margin-scale));
}
.-mr-32 {
  margin-right: calc(-32 * var(--margin-scale));
}
.-mr-40 {
  margin-right: calc(-40 * var(--margin-scale));
}
.-mr-48 {
  margin-right: calc(-48 * var(--margin-scale));
}
.-mr-56 {
  margin-right: calc(-56 * var(--margin-scale));
}
.-mr-64 {
  margin-right: calc(-64 * var(--margin-scale));
}
.-mr-px {
  margin-right: -1px;
}
.-mb-1 {
  margin-bottom: calc(-1 * var(--margin-scale));
}
.-mb-2 {
  margin-bottom: calc(-2 * var(--margin-scale));
}
.-mb-3 {
  margin-bottom: calc(-3 * var(--margin-scale));
}
.-mb-4 {
  margin-bottom: calc(-4 * var(--margin-scale));
}
.-mb-5 {
  margin-bottom: calc(-5 * var(--margin-scale));
}
.-mb-6 {
  margin-bottom: calc(-6 * var(--margin-scale));
}
.-mb-8 {
  margin-bottom: calc(-8 * var(--margin-scale));
}
.-mb-10 {
  margin-bottom: calc(-10 * var(--margin-scale));
}
.-mb-12 {
  margin-bottom: calc(-12 * var(--margin-scale));
}
.-mb-16 {
  margin-bottom: calc(-16 * var(--margin-scale));
}
.-mb-20 {
  margin-bottom: calc(-20 * var(--margin-scale));
}
.-mb-24 {
  margin-bottom: calc(-24 * var(--margin-scale));
}
.-mb-32 {
  margin-bottom: calc(-32 * var(--margin-scale));
}
.-mb-40 {
  margin-bottom: calc(-40 * var(--margin-scale));
}
.-mb-48 {
  margin-bottom: calc(-48 * var(--margin-scale));
}
.-mb-56 {
  margin-bottom: calc(-56 * var(--margin-scale));
}
.-mb-64 {
  margin-bottom: calc(-64 * var(--margin-scale));
}
.-mb-px {
  margin-bottom: -1px;
}
.-ml-1 {
  margin-left: calc(-1 * var(--margin-scale));
}
.-ml-2 {
  margin-left: calc(-2 * var(--margin-scale));
}
.-ml-3 {
  margin-left: calc(-3 * var(--margin-scale));
}
.-ml-4 {
  margin-left: calc(-4 * var(--margin-scale));
}
.-ml-5 {
  margin-left: calc(-5 * var(--margin-scale));
}
.-ml-6 {
  margin-left: calc(-6 * var(--margin-scale));
}
.-ml-8 {
  margin-left: calc(-8 * var(--margin-scale));
}
.-ml-10 {
  margin-left: calc(-10 * var(--margin-scale));
}
.-ml-12 {
  margin-left: calc(-12 * var(--margin-scale));
}
.-ml-16 {
  margin-left: calc(-16 * var(--margin-scale));
}
.-ml-20 {
  margin-left: calc(-20 * var(--margin-scale));
}
.-ml-24 {
  margin-left: calc(-24 * var(--margin-scale));
}
.-ml-32 {
  margin-left: calc(-32 * var(--margin-scale));
}
.-ml-40 {
  margin-left: calc(-40 * var(--margin-scale));
}
.-ml-48 {
  margin-left: calc(-48 * var(--margin-scale));
}
.-ml-56 {
  margin-left: calc(-56 * var(--margin-scale));
}
.-ml-64 {
  margin-left: calc(-64 * var(--margin-scale));
}
.-ml-px {
  margin-left: -1px;
}
.-mx-1 {
  margin-left: calc(-1 * var(--margin-scale));
  margin-right: calc(-1 * var(--margin-scale));
}
.-mx-2 {
  margin-left: calc(-2 * var(--margin-scale));
  margin-right: calc(-2 * var(--margin-scale));
}
.-mx-3 {
  margin-left: calc(-3 * var(--margin-scale));
  margin-right: calc(-3 * var(--margin-scale));
}
.-mx-4 {
  margin-left: calc(-4 * var(--margin-scale));
  margin-right: calc(-4 * var(--margin-scale));
}
.-mx-5 {
  margin-left: calc(-5 * var(--margin-scale));
  margin-right: calc(-5 * var(--margin-scale));
}
.-mx-6 {
  margin-left: calc(-6 * var(--margin-scale));
  margin-right: calc(-6 * var(--margin-scale));
}
.-mx-8 {
  margin-left: calc(-8 * var(--margin-scale));
  margin-right: calc(-8 * var(--margin-scale));
}
.-mx-10 {
  margin-left: calc(-10 * var(--margin-scale));
  margin-right: calc(-10 * var(--margin-scale));
}
.-mx-12 {
  margin-left: calc(-12 * var(--margin-scale));
  margin-right: calc(-12 * var(--margin-scale));
}
.-mx-16 {
  margin-left: calc(-16 * var(--margin-scale));
  margin-right: calc(-16 * var(--margin-scale));
}
.-mx-20 {
  margin-left: calc(-20 * var(--margin-scale));
  margin-right: calc(-20 * var(--margin-scale));
}
.-mx-24 {
  margin-left: calc(-24 * var(--margin-scale));
  margin-right: calc(-24 * var(--margin-scale));
}
.-mx-32 {
  margin-left: calc(-32 * var(--margin-scale));
  margin-right: calc(-32 * var(--margin-scale));
}
.-mx-40 {
  margin-left: calc(-40 * var(--margin-scale));
  margin-right: calc(-40 * var(--margin-scale));
}
.-mx-48 {
  margin-left: calc(-48 * var(--margin-scale));
  margin-right: calc(-48 * var(--margin-scale));
}
.-mx-56 {
  margin-left: calc(-56 * var(--margin-scale));
  margin-right: calc(-56 * var(--margin-scale));
}
.-mx-64 {
  margin-left: calc(-64 * var(--margin-scale));
  margin-right: calc(-64 * var(--margin-scale));
}
.-mx-px {
  margin-left: -1px;
  margin-right: -1px;
}
.-my-1 {
  margin-top: calc(-1 * var(--margin-scale));
  margin-bottom: calc(-1 * var(--margin-scale));
}
.-my-2 {
  margin-top: calc(-2 * var(--margin-scale));
  margin-bottom: calc(-2 * var(--margin-scale));
}
.-my-3 {
  margin-top: calc(-3 * var(--margin-scale));
  margin-bottom: calc(-3 * var(--margin-scale));
}
.-my-4 {
  margin-top: calc(-4 * var(--margin-scale));
  margin-bottom: calc(-4 * var(--margin-scale));
}
.-my-5 {
  margin-top: calc(-5 * var(--margin-scale));
  margin-bottom: calc(-5 * var(--margin-scale));
}
.-my-6 {
  margin-top: calc(-6 * var(--margin-scale));
  margin-bottom: calc(-6 * var(--margin-scale));
}
.-my-8 {
  margin-top: calc(-8 * var(--margin-scale));
  margin-bottom: calc(-8 * var(--margin-scale));
}
.-my-10 {
  margin-top: calc(-10 * var(--margin-scale));
  margin-bottom: calc(-10 * var(--margin-scale));
}
.-my-12 {
  margin-top: calc(-12 * var(--margin-scale));
  margin-bottom: calc(-12 * var(--margin-scale));
}
.-my-16 {
  margin-top: calc(-16 * var(--margin-scale));
  margin-bottom: calc(-16 * var(--margin-scale));
}
.-my-20 {
  margin-top: calc(-20 * var(--margin-scale));
  margin-bottom: calc(-20 * var(--margin-scale));
}
.-my-24 {
  margin-top: calc(-24 * var(--margin-scale));
  margin-bottom: calc(-24 * var(--margin-scale));
}
.-my-32 {
  margin-top: calc(-32 * var(--margin-scale));
  margin-bottom: calc(-32 * var(--margin-scale));
}
.-my-40 {
  margin-top: calc(-40 * var(--margin-scale));
  margin-bottom: calc(-40 * var(--margin-scale));
}
.-my-48 {
  margin-top: calc(-48 * var(--margin-scale));
  margin-bottom: calc(-48 * var(--margin-scale));
}
.-my-56 {
  margin-top: calc(-56 * var(--margin-scale));
  margin-bottom: calc(-56 * var(--margin-scale));
}
.-my-64 {
  margin-top: calc(-64 * var(--margin-scale));
  margin-bottom: calc(-64 * var(--margin-scale));
}
.-my-px {
  margin-top: -1px;
  margin-bottom: -1px;
}`

    await run(src, expected)
  })
})
