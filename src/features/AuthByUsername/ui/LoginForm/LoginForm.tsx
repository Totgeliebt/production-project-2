import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                placeholder={t('Введите имя пользователя')}
                onChange={onChange}
                value={value}
                className={cls.input}
            />
            <Input
                placeholder={t('Введите пароль')}
                onChange={onChange}
                value={value}
                className={cls.input}
                type="text"
            />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
