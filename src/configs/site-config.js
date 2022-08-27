import React from 'react'
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
const siteConfig = {
	copyright: `Copyright © ${new Date().getFullYear()} Taing Menghai. All Rights Reserved.`,
	author: {
		name: 'Taing Menghai',
		accounts: [
			{
				url: 'https://github.com/TaingMenghai',
				label: 'Github Account',
				type: 'gray',
				icon: <FaGithub />,
			},
			{
				url: 'https://www.linkedin.com/in/taing-menghai',
				label: 'LinkedIn Account',
				type: 'linkedin',
				icon: <FaLinkedin />,
			},
			{
				url: 'mailto:taing.menghai.2021@gmail.com',
				label: 'Menghai',
				type: 'red',
				icon: <FiMail />,
			},
			{
				url: 'https://t.me/Menghaiii',
				label: 'Telegram Account',
				type: 'telegram',
				icon: <FaTelegramPlane />,
			},
		],
	},
}

export default siteConfig
