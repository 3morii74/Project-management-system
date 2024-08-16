<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Task;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => '3morii74',
            'email' => 'test@example.com',
            'password' => bcrypt('123.321A'),
            'email_verified_at' => time(),
            'role' => 1,
        ]);
        Project::factory(30)
            ->hasTasks(30)
            ->create();
    }
}
