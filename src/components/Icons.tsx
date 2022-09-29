interface IconProps {
	className?:string
	fill?:string
	margin?:number
	size?:number
}

const Icons = {
	Logo: ({size, fill, margin}:IconProps) => (
		<svg width={size || 32} height={size || 32} viewBox="0 0 512 512" style={{marginRight:(margin || 0)}}>
			<path fill={fill || "currentColor"} d="M334 42C346 52.05 334.91 56.69 366 67.05C396 77.05 390.24 186.03 361 195C331.5 204.05 241.5 147.45 249 104C256.5 60.55 322 31.95 334 42ZM493 135C476.5 138.05 462.73 150.92 488.5 169.05C502 178.55 509.5 131.95 493 135ZM402 232.05C407.44 247.28 394.5 338.55 407 369C418.62 397.31 357.61 337.08 364 285C370.5 232.05 397 218.05 402 232.05ZM155 331C217.1 283.36 265 225.55 266.5 229.55C276.85 257.15 270.5 281.61 255.5 292.55C240.5 303.5 234 314.55 235 321C248.6 408.67 117.84 462.7 116 453C101 374.05 144.5 339.05 155 331Z" />
			<path stroke="#2c0a01" strokeWidth="10" fill="none" d="M279 199C267 245.11 208.93 280.04 147 340C119 367.11 108.05 394.44 115 443.11C116 450.11 116.98 505.74 204 502.11C300 498.11 300 351.11 203 399.11C25.37 487.01 9 398.11 9 398.11M390 215C412.14 229.71 405.16 274.35 401 302.11C398 322.11 400 422.11 468 436.11C488.75 440.38 499 469.22 492 481.11C485 493 452 504.11 372 480C287.66 454.58 293.8 288.55 342 327.11C372 351.11 376 464.11 292 493.11M499 134.05C476 132.55 458 150.05 492 173.05M343 66.11C330.74 84.49 364 156.71 364 178C364 196.11 341 203.11 307 179.11C271.53 154.07 245 134.11 249 104C252.63 76.69 322 -20.89 419 20C476.78 44.36 458 83.11 463 97.11C475.26 131.44 508 116.89 501 156C494 195.11 405 206.89 393 182" />
			<path fill="#2c0a01" d="M402.75 69.78L394.75 63.28C394.75 63.28 417.75 61.3 423.25 87.28C423.83 90.04 410 83.78 396 86.78C385.97 88.93 383.25 94.53 374.5 97.78C365.28 101.2 379 70.75 402.75 69.78Z" />
		</svg>
	), 
	Info: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z" />
		</svg>
	), 
	SortAsc: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M5 11H1c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1zM1 9h2c.6 0 1-.4 1-1s-.4-1-1-1H1c-.6 0-1 .4-1 1s.4 1 1 1z" />
			<circle cx="1" cy="4" r="1"></circle>
			<path d="M15.7 9.3c-.4-.4-1-.4-1.4 0L13 10.6V3c0-.6-.4-1-1-1s-1 .4-1 1v7.6L9.7 9.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.5.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4z" />
		</svg>
	), 
	SortDesc: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M1 3h4c.6 0 1 .4 1 1s-.4 1-1 1H1c-.6 0-1-.4-1-1s.4-1 1-1zm0 4h2c.6 0 1 .4 1 1s-.4 1-1 1H1c-.6 0-1-.4-1-1s.4-1 1-1zm0 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm14.7-1.7c-.4-.4-1-.4-1.4 0L13 10.6V3c0-.6-.4-1-1-1s-1 .4-1 1v7.6L9.7 9.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.5.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4z" />
		</svg>
	), 
	star: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M8 0c.4 0 .7.2.9.6l1.9 4.1 4.3.7c.4.1.7.3.8.7s0 .7-.2 1l-3.1 3.2.7 4.6c.1.4-.1.8-.4 1s-.7.2-1.1.1L8 13.8l-3.8 2.1c-.3.2-.7.2-1.1-.1-.3-.2-.5-.6-.4-1l.7-4.6L.3 7C0 6.8-.1 6.4.1 6c.1-.4.4-.6.8-.7l4.3-.7L7.1.5c.2-.3.5-.5.9-.5zm0 3.4L6.7 6c-.1.3-.4.5-.7.6L3.1 7l2.1 2.2c.2.2.3.5.3.9l-.5 3 2.5-1.4c.3-.2.7-.2 1 0l2.5 1.4-.5-3c-.1-.3 0-.6.3-.9L12.9 7 10 6.6c-.3-.1-.6-.3-.7-.6z"/>
		</svg>
	), 
	
	location: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M11.351 9.782c-.299.432-.598.865-.857 1.313L8.35 14.802a.408.408 0 01-.7 0l-2.144-3.707a19.57 19.57 0 00-.857-1.313c-.6-.867-1.198-1.733-1.477-2.726A4.63 4.63 0 013 5.802C3 3.15 5.239 1 8 1s5 2.15 5 4.802c0 .434-.06.854-.172 1.254-.28.993-.878 1.86-1.477 2.726zM8 8a2 2 0 100-4 2 2 0 000 4z" />
		</svg>
	), 
	Check: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill="none" stroke={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 8.586L6 12l8-8" />
		</svg>
	), 
	

	Plus: ({className, fill, margin, size}:IconProps) => (
		<svg viewBox="0 0 24 24" width={size || 16} height={size || 16} fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M1 9L23 9L23 15L1 15L1 9ZM15 1L15 23L9 23L9 1L15 1Z" />
		</svg>
	),
	Minus: ({className, fill, margin, size}:IconProps) => (
		<svg viewBox="0 0 24 24" width={size || 16} height={size || 16} fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M1 9L23 9L23 15L1 15L1 9Z" />
		</svg>
	),
	Arrow: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M11.706 13.292L6.414 7.999l5.292-5.293a1 1 0 00-1.414-1.414l-6 6a.996.996 0 00-.277.53L4 7.94v.118c.014.236.11.468.291.648l6 6a1 1 0 101.414-1.414z" />
		</svg>
	),

	Profile: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M4.964 6.286a3.036 3.036 0 016.072 0v.38a3.036 3.036 0 01-6.072 0zM8 4.75c-.848 0-1.536.688-1.536 1.536v.38a1.536 1.536 0 103.072 0v-.38c0-.848-.688-1.536-1.536-1.536z" />
			<path d="M5.089.972a7.607 7.607 0 115.822 14.056A7.607 7.607 0 015.09.972zm-.804 11.876a6.105 6.105 0 007.394.026l-.28-.186h-.001a5.396 5.396 0 00-2.982-.903h-.922a5.37 5.37 0 00-3.209 1.063zm8.493-1.045l-.548-.364a6.9 6.9 0 00-3.856-1.154h-.88a6.869 6.869 0 00-4.287 1.5 6.106 6.106 0 119.571.018z"/>
		</svg>
	),
	Settings: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M5 10c1.306 0 2.418.835 2.83 2H15a1 1 0 110 2H7.829a3.001 3.001 0 01-5.658 0H1a1 1 0 110-2h1.17A3.001 3.001 0 015 10zm0 2a1 1 0 100 2 1 1 0 000-2zm6-7c1.306 0 2.418.835 2.83 2H15a1 1 0 110 2h-1.171a3.001 3.001 0 01-5.658 0H1a1 1 0 110-2h7.17A3.001 3.001 0 0111 5zm0 2a1 1 0 100 2 1 1 0 000-2zM5 0c1.306 0 2.418.835 2.83 2H15a1 1 0 110 2H7.829a3.001 3.001 0 01-5.658 0H1a1 1 0 010-2h1.17A3.001 3.001 0 015 0zm0 2a1 1 0 100 2 1 1 0 000-2z"/>
		</svg>
	),
	Trading: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M1 16a1 1 0 110-2h2V1a1 1 0 012 0h10.868l-3.666 5.5 3.666 5.5H5v2h2a1 1 0 110 2H1zM12.132 3H5v7h7.132L9.798 6.5 12.132 3z"/>
		</svg>
	),
	Search: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<g clip-path="url(#search_svg__clip0)">
				<path d="M12.6 11.2a7 7 0 10-1.4 1.4.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093zM12 7A5 5 0 112 7a5 5 0 0110 0z" />
			</g><defs><clipPath id="search_svg__clip0"><path d="M0 0h16v16H0V0z"></path></clipPath></defs>
		</svg>
	),
	Partners: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M13 0a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3h10zm0 2h-1v9.414l-4-4-4 4V2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1zm-3 0H6v4.586l2-2 2 2V2z"/>
		</svg>
	),
	Invite: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M.96 10.112C1.587 9.415 2.462 9 3.4 9h4.2c.938 0 1.813.415 2.44 1.112.625.694.96 1.614.96 2.555V14a1 1 0 11-2 0v-1.333c0-.474-.17-.91-.446-1.217-.273-.303-.619-.45-.954-.45H3.4c-.335 0-.681.147-.954.45A1.825 1.825 0 002 12.667V14a1 1 0 11-2 0v-1.333c0-.94.335-1.861.96-2.555zM5.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM2 4.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm11-.167a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z"/>
			<path d="M10 7.333a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z"/>
		</svg>
	),
	Whatnew: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M4.833 6.167A3.167 3.167 0 1110.5 8.11v.012a4.01 4.01 0 01-.773.486C9.316 8.805 9 9.192 9 9.648V11H7V9.65c0-.457-.316-.844-.727-1.041a4.003 4.003 0 01-.773-.486V8.11a3.153 3.153 0 01-.667-1.944zm8.334 0A5.16 5.16 0 0111 10.374V11a2 2 0 01-2 2H7a2 2 0 01-2-2v-.626a5.167 5.167 0 118.167-4.207zM6 14a1 1 0 100 2h4a1 1 0 100-2H6z"/>
		</svg>
	),
	Logout: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M4 0a1 1 0 010 2H2v12h2a1 1 0 110 2H1a1 1 0 01-1-1V1a1 1 0 011-1h3zm5.707 1.293l6 6a.997.997 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L12.586 9H6a1 1 0 110-2h6.586L8.293 2.707a1 1 0 011.414-1.414z"/>
		</svg>
	),
	Alert: ({className, fill, margin, size}:IconProps) => (
		<svg width="24" height="24" viewBox="0 0 24 24" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M19.2 14.5l-.6-.6c-.2-.2-.4-.6-.4-.9v-2.8c0-2.3-1.5-4.3-3.6-5v-.4c0-1.4-1.2-2.6-2.6-2.6S9.4 3.4 9.4 4.8v.4c-2 .7-3.4 2.5-3.6 4.7 0 .1-.1.2-.1.3V13c0 .3-.1.7-.4.9l-.6.6c-.4.5-.7 1.2-.7 1.9C4 17.9 5.2 19 6.6 19H9c.2 1.5 1.5 2.7 3 2.7 1.6 0 2.8-1.2 3-2.7h2.3c1.5 0 2.6-1.2 2.6-2.6.1-.7-.2-1.4-.7-1.9zm-8.3-9.7c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1v.1h-2c-.1 0-.1 0-.2-.1zM12 20.2c-.7 0-1.3-.5-1.5-1.2h3c-.2.7-.8 1.2-1.5 1.2zm5.3-2.6H6.6c-.6 0-1.1-.5-1.1-1.1 0-.3.1-.7.4-.9l.6-.6c.5-.5.8-1.2.8-2v-2.7c0-2.1 1.7-3.8 3.8-3.8h1.8c2.1 0 3.8 1.7 3.8 3.8V13c0 .7.3 1.4.8 1.9l.6.6c.2.2.4.5.4.9 0 .6-.5 1.2-1.2 1.2z"/>
		</svg>
	),

	Phone: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M8 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
			<path d="M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2 0h8v12H4V2z"/>
		</svg>
	),
	Email: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M3 1a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3V4a3 3 0 00-3-3H3zm-.898 2.559A1 1 0 013 3h10a1 1 0 01.898.559L8 7.77 2.102 3.56zM2 5.943V12a1 1 0 001 1h10a1 1 0 001-1V5.943l-5.419 3.87a1 1 0 01-1.162 0L2 5.944z" />
		</svg>
	),
	Idverify: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M3 1a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3V4a3 3 0 00-3-3H3zm-.898 2.559A1 1 0 013 3h10a1 1 0 01.898.559L8 7.77 2.102 3.56zM2 5.943V12a1 1 0 001 1h10a1 1 0 001-1V5.943l-5.419 3.87a1 1 0 01-1.162 0L2 5.944z" />
		</svg>
	),
	Address: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M11.351 9.782c-.299.432-.598.865-.857 1.313L8.35 14.802a.408.408 0 01-.7 0l-2.144-3.707a19.57 19.57 0 00-.857-1.313c-.6-.867-1.198-1.733-1.477-2.726A4.63 4.63 0 013 5.802C3 3.15 5.239 1 8 1s5 2.15 5 4.802c0 .434-.06.854-.172 1.254-.28.993-.878 1.86-1.477 2.726zM8 8a2 2 0 100-4 2 2 0 000 4z" />
		</svg>
	),
	Thumbup: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill="none" stroke={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.952 6.768l2.774-3.62A1.317 1.317 0 019.79 3.11c.199.244.305.548.305.869V6.47h2.36c.456 0 .883.229 1.134.602l.244.374c.221.335.29.754.175 1.135l-1.036 3.596c-.175.587-.708.99-1.318.99H6.857c-.38 0-.747-.16-1.006-.441l-.899-1.06m-.804 1.524H2.709a.805.805 0 01-.804-.807v-5.63c0-.45.358-.808.804-.808h1.439c.442 0 .804.358.804.8v5.623c0 .441-.365.822-.804.822z"/>
		</svg>
	),
	Thumbdown: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M8.242 12.672l-.595-.456-.004.005.599.451zm-2.065.038l-.582.473.005.006.577-.479zm-.305-3.36h.75a.75.75 0 00-.75-.75v.75zm-3.494-.602l-.628.41.006.008.622-.418zm-.243-.374l.628-.41-.002-.003-.626.413zM1.959 7.24l.719.215.002-.007-.72-.208zm1.037-3.596l-.72-.215-.001.007.72.208zm7.12-.549l-.552.508.016.016.536-.524zm1.704.285h1.438v-1.5H11.82v1.5zm1.438 0c.01 0 .017.002.021.004a.059.059 0 01.034.054h1.5c0-.848-.683-1.558-1.555-1.558v1.5zm.055.058v5.63h1.5v-5.63h-1.5zm0 5.63a.057.057 0 01-.016.043.051.051 0 01-.039.015v1.5c.863 0 1.555-.696 1.555-1.557h-1.5zm-.055.058H11.82v1.5h1.438v-1.5zm-1.438 0a.055.055 0 01-.04-.017.045.045 0 01-.015-.033h-1.5c0 .862.704 1.55 1.555 1.55v-1.5zm-.055-.05V3.452h-1.5v5.623h1.5zm0-5.623c0-.012.006-.034.026-.054a.075.075 0 01.022-.017l.007-.002v-1.5c-.873 0-1.555.737-1.555 1.573h1.5zM10.42 8.596l-2.773 3.62 1.19.912 2.774-3.62-1.191-.912zm-2.777 3.625a.567.567 0 01-.888.01L5.6 13.19c.843 1.017 2.433 1.008 3.241-.066l-1.198-.902zm-.884.016a.622.622 0 01-.137-.396h-1.5c0 .489.164.961.473 1.342l1.164-.946zm-.137-.396V9.349h-1.5v2.492h1.5zm-.75-3.242H3.514v1.5h2.358V8.6zm-2.358 0A.621.621 0 013 8.33l-1.244.837a2.12 2.12 0 001.758.933V8.6zm-.508-.262l-.243-.373-1.256.82.243.374 1.256-.82zm-.245-.376a.614.614 0 01-.083-.507l-1.437-.43a2.113 2.113 0 00.267 1.763l1.253-.826zm-.081-.514L3.716 3.85l-1.441-.415-1.036 3.596 1.441.416zm1.034-3.59a.628.628 0 01.6-.455v-1.5c-.948 0-1.769.628-2.037 1.526l1.437.43zm.6-.455H9.11v-1.5H4.314v1.5zm4.797 0a.62.62 0 01.453.2l1.104-1.015a2.117 2.117 0 00-1.557-.685v1.5zm.469.216l.931.954 1.073-1.048-.931-.954L9.58 3.618z" />
		</svg>
	),
	
	Eye: ({className, fill, margin, size}:IconProps) => (
		<svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill={fill || 'currentColor'} className={className || ''} style={{marginRight:(margin || 0)}}>
			<path d="M8.242 12.672l-.595-.456-.004.005.599.451zm-2.065.038l-.582.473.005.006.577-.479zm-.305-3.36h.75a.75.75 0 00-.75-.75v.75zm-3.494-.602l-.628.41.006.008.622-.418zm-.243-.374l.628-.41-.002-.003-.626.413zM1.959 7.24l.719.215.002-.007-.72-.208zm1.037-3.596l-.72-.215-.001.007.72.208zm7.12-.549l-.552.508.016.016.536-.524zm1.704.285h1.438v-1.5H11.82v1.5zm1.438 0c.01 0 .017.002.021.004a.059.059 0 01.034.054h1.5c0-.848-.683-1.558-1.555-1.558v1.5zm.055.058v5.63h1.5v-5.63h-1.5zm0 5.63a.057.057 0 01-.016.043.051.051 0 01-.039.015v1.5c.863 0 1.555-.696 1.555-1.557h-1.5zm-.055.058H11.82v1.5h1.438v-1.5zm-1.438 0a.055.055 0 01-.04-.017.045.045 0 01-.015-.033h-1.5c0 .862.704 1.55 1.555 1.55v-1.5zm-.055-.05V3.452h-1.5v5.623h1.5zm0-5.623c0-.012.006-.034.026-.054a.075.075 0 01.022-.017l.007-.002v-1.5c-.873 0-1.555.737-1.555 1.573h1.5zM10.42 8.596l-2.773 3.62 1.19.912 2.774-3.62-1.191-.912zm-2.777 3.625a.567.567 0 01-.888.01L5.6 13.19c.843 1.017 2.433 1.008 3.241-.066l-1.198-.902zm-.884.016a.622.622 0 01-.137-.396h-1.5c0 .489.164.961.473 1.342l1.164-.946zm-.137-.396V9.349h-1.5v2.492h1.5zm-.75-3.242H3.514v1.5h2.358V8.6zm-2.358 0A.621.621 0 013 8.33l-1.244.837a2.12 2.12 0 001.758.933V8.6zm-.508-.262l-.243-.373-1.256.82.243.374 1.256-.82zm-.245-.376a.614.614 0 01-.083-.507l-1.437-.43a2.113 2.113 0 00.267 1.763l1.253-.826zm-.081-.514L3.716 3.85l-1.441-.415-1.036 3.596 1.441.416zm1.034-3.59a.628.628 0 01.6-.455v-1.5c-.948 0-1.769.628-2.037 1.526l1.437.43zm.6-.455H9.11v-1.5H4.314v1.5zm4.797 0a.62.62 0 01.453.2l1.104-1.015a2.117 2.117 0 00-1.557-.685v1.5zm.469.216l.931.954 1.073-1.048-.931-.954L9.58 3.618z" />
		</svg>
	),
	
}

export default Icons