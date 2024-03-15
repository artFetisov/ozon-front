import { metadata } from './../app/layout'
import { IFeedback } from '@/types/feedback/feedback.types'
import { productsMock } from './products'

export const mockFeedbacks: IFeedback[] = [
	{
		id: 0,
		author: {
			id: 1,
			name: 'Artem',
			lastName: 'Fetisov',
			email: 'aaa',
		},
		product: productsMock[1],
		description: {
			id: 2,
			dignities: ',cnlksmlksmkmsfmek;fm;AMFk;emfkl;AEMFk;msefk',
			disadvantages: '11111111111111111114444444444444444444s.sdvmksmv',
			comment: 'scmkl;fml;efl;,lf,elf,lef,qe,fe,fle,qf,efl,elf,',
		},
		videos: [],
		images: [],
		date: new Date(),
		grade: 4,
	},
	{
		id: 1,
		author: {
			id: 2,
			name: 'Artem',
			lastName: 'Fetisov',
			email: 'aaa',
		},
		product: productsMock[2],
		description: {
			id: 3,
			dignities: ',cnlksmlksmkmsfmek;fm;AMFk;emfkl;AEMFk;msefk',
			disadvantages: '11111111111111111114444444444444444444s.sdvmksmv',
			comment: 'scmkl;fml;efl;,lf,elf,lef,qe,fe,fle,qf,efl,elf,',
		},
		videos: [],
		images: [],
		date: new Date(),
		grade: 3,
	},
	{
		id: 34,
		author: {
			id: 12,
			name: 'Artesc.,dmcdl/c,m',
			lastName: 'Fetisssssssov',
			email: 'aaa',
		},
		product: productsMock[0],
		description: {
			id: 2,
			dignities: ',cnlksmlksmkmsfmek;fm;AMFk;emfkl;AEMFk;msefk',
			disadvantages: '11111111111111111114444444444444444444s.sdvmksmv',
			comment: 'scmkl;fml;efl;,lf,elf,lef,qe,fe,fle,qf,efl,elf,',
		},
		videos: [],
		images: [],
		date: new Date(),
		grade: 4.5,
	},
	{
		id: 10,
		author: {
			id: 122,
			name: 'Irina',
			lastName: 'Fetisov',
			email: 'aaa',
		},
		product: productsMock[1],
		description: {
			id: 2,
			dignities: ',cnlksmlksmkmsfmek;fm;AMFk;emfkl;AEMFk;msefk',
			disadvantages: '11111111111111111114444444444444444444s.sdvmksmv',
			comment: 'scmkl;fml;efl;,lf,elf,lef,qe,fe,fle,qf,efl,elf,',
		},
		videos: [],
		images: [],
		date: new Date(),
		grade: 2,
	},
	{
		id: 100,
		author: {
			id: 300,
			name: 'Roman',
			lastName: 'Fetisov',
			email: 'aaa',
		},
		product: productsMock[5],
		description: {
			id: 2,
			dignities: ',cnlksmlksmkmsfmek;fm;AMFk;emfkl;AEMFk;msefk',
			disadvantages: '11111111111111111114444444444444444444s.sdvmksmv',
			comment: 'scmkl;fml;efl;,lf,elf,lef,qe,fe,fle,qf,efl,elf,',
		},
		videos: [],
		images: [],
		date: new Date(),
		grade: 1,
	},
]
