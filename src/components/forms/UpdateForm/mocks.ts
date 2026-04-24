import type { ProfileFormData } from "./schema";

  // Функция для сохранения в localStorage (мок-API)
  export const saveProfileToMockAPI = async (data: ProfileFormData) => {
    
    
    // Имитация задержки сети
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Сохраняем в localStorage
    const existingUser = localStorage.getItem('user');
    const user = existingUser ? JSON.parse(existingUser) : {};
    
    const updatedUser = {
      ...user,
      name: data.name,
      telegram: data.telegram,
      email: data.email,
      aboutMe: data.aboutMe,
      updatedAt: new Date().toISOString()
    };
    
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    // Сохраняем отдельно профиль
    localStorage.setItem('profile', JSON.stringify(data));
    
    return updatedUser;
  };