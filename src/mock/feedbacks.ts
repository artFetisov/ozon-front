import { metadata } from './../app/layout'
import { IFeedback } from '@/types/feedback/feedback.types'
import { productsMock } from './products'
import { imagesGalleryMock } from './galleryImages'

export const mockFeedbacks: IFeedback[] = [
	{
		id: 0,
		benefitGrade: {
			id: 1,
			yes: Math.floor(Math.random() * 100),
			no: Math.floor(Math.random() * 100),
		},
		comments: [
			{
				id: 1,
				author: {
					id: 20,
					name: 'Irina',
					lastName: 'Fetisova',
					email: 'lkcapaodkowd@mail.ru',
				},
				message: 'lnjanfaefmafkmekfmekafm',
				date: new Date(),
			},
			{
				id: 1,
				author: {
					id: 20,
					name: 'Irina',
					lastName: 'Fetisova',
					email: 'lkcapaodkowd@mail.ru',
				},
				message: 'lnjanfaefmafkmekfmekafmkeamfkleamfklemfklemkfmkefaefmk;xc',
				date: new Date(),
			},
			{
				id: 1,
				author: {
					id: 20,
					name: 'Irina',
					lastName: 'Fetisova',
					email: 'lkcapaodkowd@mail.ru',
				},
				message: 'lnjanfaefmafkmekfmekafmkea',
				date: new Date(),
			},
		],
		author: {
			id: 1,
			name: 'Artem',
			lastName: 'Fetisov',
			email: 'aaa',
		},
		description: {
			id: 2,
			dignities: ',cnlksmlksmkmsfmek;fm;AMFk;emfkl;AEMFk;msefk',
			disadvantages: '11111111111111111114444444444444444444s.sdvmksmv',
			comment: 'scmkl;fml;efl;,lf,elf,lef,qe,fe,fle,qf,efl,elf,',
		},
		images: imagesGalleryMock,
		date: new Date(),
		grade: 4,
	},
	{
		id: 1,
		benefitGrade: {
			id: 1,
			yes: Math.floor(Math.random() * 100),
			no: Math.floor(Math.random() * 100),
		},
		comments: [
			{
				id: 1,
				author: {
					id: 20,
					name: 'Irina',
					lastName: 'Fetisova',
					email: 'lkcapaodkowd@mail.ru',
				},
				message: 'lnjanfaefmafkmekfmekafmkeamfkleamfklemfklemkfmkefaefmk;xc',
				date: new Date(),
			},
			{
				id: 1,
				author: {
					id: 20,
					name: 'Irina',
					lastName: 'Fetisova',
					email: 'lkcapaodkowd@mail.ru',
				},
				message: 'lnjanfaefmafkmekfmekac',
				date: new Date(),
			},
			{
				id: 1,
				author: {
					id: 20,
					name: 'Irina',
					lastName: 'Fetisova',
					email: 'lkcapaodkowd@mail.ru',
				},
				message: 'lnjanfaefmafkmekfmekafmkeamfkleamfklemfklemkfmkefaefmk;xc',
				date: new Date(),
			},
		],
		author: {
			id: 2,
			name: 'Artem',
			lastName: 'Fetisov',
			email: 'aaa',
		},
		description: {
			id: 3,
			dignities: ',cnlksmlksmkmsfmek;fm;AMFk;emfkl;AEMFk;msefk',
			disadvantages: '11111111111111111114444444444444444444s.sdvmksmv',
			comment: 'scmkl;fml;efl;,lf,elf,lef,qe,fe,fle,qf,efl,elf,',
		},
		images: imagesGalleryMock,
		date: new Date(),
		grade: 3,
	},
	{
		id: 34,
		benefitGrade: {
			id: 1,
			yes: Math.floor(Math.random() * 100),
			no: Math.floor(Math.random() * 100),
		},
		comments: [
			{
				id: 1,
				author: {
					id: 20,
					name: 'Irina',
					lastName: 'Fetisova',
					email: 'lkcapaodkowd@mail.ru',
				},
				message: 'lnjanfaefmafkmekfmekafmkeamfkleamfklemfklemkfmkefaefmk;xc',
				date: new Date(),
			},
		],
		author: {
			id: 12,
			name: 'Artesc.,dmcdl/c,m',
			lastName: 'Fetisssssssov',
			email: 'aaa',
		},
		description: {
			id: 2,
			dignities: ',cnlksmlksmkmsfmek;fm;AMFk;emfkl;AEMFk;msefk',
			disadvantages: '11111111111111111114444444444444444444s.sdvmksmv',
			comment: 'scmkl;fml;efl;,lf,elf,lef,qe,fe,fle,qf,efl,elf,',
		},
		images: imagesGalleryMock,
		date: new Date(),
		grade: 4.5,
	},
	{
		id: 10,
		benefitGrade: {
			id: 1,
			yes: Math.floor(Math.random() * 100),
			no: Math.floor(Math.random() * 100),
		},
		comments: [
			{
				id: 1,
				author: {
					id: 20,
					name: 'Irina',
					lastName: 'Fetisova',
					email: 'lkcapaodkowd@mail.ru',
				},
				message: 'lnjanfaefmafkmekfmekafmkeamfkleamfklemfklemkfmkefaefmk;xc',
				date: new Date(),
			},
		],
		author: {
			id: 122,
			name: 'Irina',
			lastName: 'Fetisov',
			email: 'aaa',
		},
		description: {
			id: 2,
			dignities: ',cnlksmlksmkmsfmek;fm;AMFk;emfkl;AEMFk;msefk',
			disadvantages: '11111111111111111114444444444444444444s.sdvmksmv',
			comment: 'scmkl;fml;efl;,lf,elf,lef,qe,fe,fle,qf,efl,elf,',
		},
		images: imagesGalleryMock,
		date: new Date(),
		grade: 2,
	},
	{
		id: 100,
		benefitGrade: {
			id: 1,
			yes: Math.floor(Math.random() * 100),
			no: Math.floor(Math.random() * 100),
		},
		comments: [
			{
				id: 1,
				author: {
					id: 20,
					name: 'Irina',
					lastName: 'Fetisova',
					email: 'lkcapaodkowd@mail.ru',
				},
				message: 'lnjanfaefmafkmekfmekafmkeamfkleamfklemfklemkfmkefaefmk;xc',
				date: new Date(),
			},
		],
		author: {
			id: 300,
			name: 'Roman',
			lastName: 'Fetisov',
			email: 'aaa',
		},
		description: {
			id: 2,
			dignities: ',cnlksmlksmkmsfmek;fm;AMFk;emfkl;AEMFk;msefk',
			disadvantages: '11111111111111111114444444444444444444s.sdvmksmv',
			comment: 'scmkl;fml;efl;,lf,elf,lef,qe,fe,fle,qf,efl,elf,',
		},
		images: imagesGalleryMock,
		date: new Date(),
		grade: 1,
	},
]
