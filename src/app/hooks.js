import { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = useDispatch.withTypes?.() ?? useDispatch
export const useAppSelector = useSelector.withTypes?.() ?? useSelector
