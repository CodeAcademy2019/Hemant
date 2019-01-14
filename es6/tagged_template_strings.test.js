const ts = require('./tagged_template_strings');

test('test with & and < in name', () => {
    expect(ts([`<b>`,` says</b>:`, `"`], 'Hemant>', `& is ampersand>`)).toBe(`<b>Hemant&gt; says</b>:&amp; is ampersand&gt;\"`);
});

test('test with > and \' in name', () => {
    expect(ts([`<b>`,` says</b>:`, `"`], `Hemant'`, `> is ampersand>`)).toBe(`<b>Hemant&apos; says</b>:&gt; is ampersand&gt;\"`);
});