'use client'

import { AdminNavigation } from '@/components/shared/AdminNavigation/AdminNavigation'
import { Heading } from '@/components/ui-kit/heading/Heading'
import { Input } from '@/components/ui-kit/input/Input'
import { useGetCategoryByIdQuery, useUpdateCategoryMutation } from '@/store/categories/categories.api'
import { useParams } from 'next/navigation'
import styles from './AdminCategory.module.scss'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { ICategory, ICategoryResponse, ISubCategoryR, ISubSubCategoryR } from '@/types/category/category.types'
import { FC } from 'react'
import { AdminTable } from '@/components/shared/AdminTable/AdminTable'
import { Button } from '@/components/ui-kit/button/Button'
import { getSubItemsForAdminTable, getSubSubItemsForAdminTable } from '@/utils/admin/admin'

const newFunc3 = () => {
	return 'new func 3'
}

const catSchema = yup.object().shape({
	title: yup.string().required('Это поле обязательно для ввода').min(3),
	slug: yup.string().required('Это поле обязательно для ввода').min(3),
})

export const AdminCategory = () => {
	const { id } = useParams<{ id: string }>()

	const { data, isLoading, error } = useGetCategoryByIdQuery(Number(id))

	const [updateCategory] = useUpdateCategoryMutation()

	const handleUpdateCategory = (data: { slug: string; title: string }) => {
		updateCategory({ id: Number(id), data })
	}

	if (isLoading) {
		return <h1>...Loading</h1>
	}

	if (error) {
		return <div>ошибка</div>
	}

	return (
		<>
			<AdminNavigation />
			<Heading text={'Изменить категорию'} />
			<AdminCategoryForm data={data} update={handleUpdateCategory} />

			{data?.subCategories ? (
				<>
					<Heading text={'Подкатегории'} size='middle' />
					<AdminTable
						headers={['Название', 'Слаг']}
						tableItems={getSubItemsForAdminTable<ISubCategoryR>(data?.subCategories)}
						remove={() => {}}
						subItems={getSubSubItemsForAdminTable<ISubSubCategoryR>(data?.subSubCategories)}
					/>
				</>
			) : (
				<div>
					<Button variant='middle' color='blue'>
						Добавить подкатегорию
					</Button>
				</div>
			)}
		</>
	)
}

interface IChangeAdminCategoryForm {
	data?: ICategoryResponse
	update: (data: { title: string; slug: string }) => void
}

const AdminCategoryForm: FC<IChangeAdminCategoryForm> = ({ data, update }) => {
	const { handleSubmit, control, setValue, getValues, watch } = useForm<Pick<ICategory, 'title' | 'slug'>>({
		mode: 'onSubmit',
		defaultValues: { title: data?.title ?? '', slug: data?.slug ?? '' },
		resolver: yupResolver(catSchema),
	})

	const isEqualValues = getValues('slug') === data?.slug && getValues('title') === data?.title

	const handleClearInput = (name: keyof Pick<ICategory, 'slug' | 'title'>) => {
		setValue(name, '')
	}

	const onSubmit: SubmitHandler<Pick<ICategory, 'slug' | 'title'>> = (data) => {
		update(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.catsForm}>
			<div className={styles.inputsBox}>
				<Controller
					name='title'
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<Input<keyof Pick<ICategory, 'slug' | 'title'>>
							type='text'
							value={watch('title')}
							onChange={onChange}
							autoFocus
							onClear={handleClearInput}
							removeName='title'
							error={error}
							placeholder='Название'
						/>
					)}
				/>
				<Controller
					name='slug'
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<Input<keyof Pick<ICategory, 'slug' | 'title'>>
							type='text'
							value={watch('slug')}
							onChange={onChange}
							onClear={handleClearInput}
							removeName='slug'
							error={error}
							placeholder='Слаг'
						/>
					)}
				/>
			</div>
			<Button type='submit' variant='small' color='green' isFullWidth={false} disabledP={isEqualValues}>
				Сохранить
			</Button>
		</form>
	)
}
