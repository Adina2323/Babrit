﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var menu = new Menu();
            do
            {
                menu.HandleUserInput();
            }while (true);
        }
    }
}
