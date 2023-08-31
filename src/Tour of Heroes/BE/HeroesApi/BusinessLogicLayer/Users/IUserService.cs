﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DataAcessLayer.Mappings.DTOs;
using DataAcessLayer.Models;

namespace BusinessLogicLayer.Users
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetUsersAsync();

        Task<User> GetUserByEmailAsync(string email);

        Task<User> AddUserAsync(string email, string password, string username, string name);

        Task<int> UpdatePassword(User user, string newPassword);
        Task<bool> UpdateUser(UserUpdateDTO user, long id);

    }
}
