const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.wrap,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Behaviors.destroy,
		C3.Behaviors.bound,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Behaviors.MoveTo,
		C3.Plugins.Mouse,
		C3.Behaviors.Bullet,
		C3.Plugins.progressbar,
		C3.Plugins.TiledBg,
		C3.Plugins.Button,
		C3.Behaviors.Physics,
		C3.Behaviors.Platform,
		C3.Plugins.Audio,
		C3.Plugins.sliderbar,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.IID,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.progressbar.Acts.SetProgress,
		C3.Plugins.progressbar.Exps.Progress,
		C3.Plugins.progressbar.Cnds.CompareProgress,
		C3.Plugins.progressbar.Acts.Destroy,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.TiledBg.Acts.SetImageOffsetX,
		C3.Plugins.TiledBg.Exps.ImageOffsetX,
		C3.Behaviors.Physics.Acts.ApplyImpulse,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.System.Exps.zeropad,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Audio.Exps.PlaybackTime,
		C3.Behaviors.Physics.Acts.Teleport,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetSolidCollisionFilter,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.Audio.Acts.Seek,
		C3.Plugins.Sprite.Acts.StartAnim
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{DarAVolta: 0},
	{CentrarEm: 0},
	{Player: 0},
	{Teclado: 0},
	{DestruirForaDoLayout: 0},
	{RestritoAoLayout: 0},
	{ovo: 0},
	{Âncora: 0},
	{points: 0},
	{MoverPara: 0},
	{Enemy: 0},
	{Mouse: 0},
	{Projétil: 0},
	{pbull: 0},
	{Texto: 0},
	{Texto2: 0},
	{pposX: 0},
	{pposY: 0},
	{lifebar: 0},
	{PlanoDeFundoEmBlocos: 0},
	{startBtn: 0},
	{Texto3: 0},
	{acno: 0},
	{EnemyBullet: 0},
	{lvltxt: 0},
	{menubg: 0},
	{nya: 0},
	{Física: 0},
	{Plataforma: 0},
	{playernya: 0},
	{PlanoDeFundoEmBlocos3: 0},
	{enemynya: 0},
	{ground: 0},
	{Áudio: 0},
	{BarraDeslizante: 0},
	{loadShot: 0},
	{loadTeleport: 0},
	{Texto4: 0},
	{Texto5: 0},
	{immortal: 0},
	{immortalityBar: 0},
	{pontos: 0},
	{PSpeed: 0},
	{LayoutRandomX: 0},
	{LayoutRandomY: 0},
	{Points: 0},
	{enemyquantity: 0},
	{level: 0},
	{pdamage: 0},
	{pontosvar: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	ovo: class extends self.ISpriteInstance {},
	points: class extends self.ITextInstance {},
	Enemy: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	pbull: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Texto2: class extends self.ITextInstance {},
	pposX: class extends self.ITextInstance {},
	pposY: class extends self.ITextInstance {},
	lifebar: class extends self.IProgressBarInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	startBtn: class extends self.IButtonInstance {},
	Texto3: class extends self.ITextInstance {},
	acno: class extends self.ISpriteInstance {},
	EnemyBullet: class extends self.ISpriteInstance {},
	lvltxt: class extends self.ITextInstance {},
	menubg: class extends self.ITiledBackgroundInstance {},
	nya: class extends self.IButtonInstance {},
	playernya: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	enemynya: class extends self.ISpriteInstance {},
	ground: class extends self.ITiledBackgroundInstance {},
	Áudio: class extends self.IInstance {},
	BarraDeslizante: class extends self.ISliderBarInstance {},
	loadShot: class extends self.IProgressBarInstance {},
	loadTeleport: class extends self.IProgressBarInstance {},
	Texto4: class extends self.ITextInstance {},
	Texto5: class extends self.ITextInstance {},
	immortal: class extends self.ISpriteInstance {},
	immortalityBar: class extends self.IProgressBarInstance {},
	pontos: class extends self.ITextInstance {}
}