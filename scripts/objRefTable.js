const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Button.Acts.SetVisible,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{First: 0},
	{Operator: 0},
	{Second: 0},
	{Result: 0},
	{Button: 0},
	{Touch: 0},
	{Keyboard: 0},
	{first: 0},
	{second: 0}
];

self.InstanceType = {
	First: class extends self.ITextInstance {},
	Operator: class extends self.ITextInstance {},
	Second: class extends self.ITextInstance {},
	Result: class extends self.ITextInstance {},
	Button: class extends self.IButtonInstance {},
	Touch: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {}
}