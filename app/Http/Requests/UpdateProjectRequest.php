<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->role === 1 || Auth::user()->role === 2;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => [
                'required',
                'max:255',
                Rule::unique('projects', 'name')->ignore($this->route('project')->id),
            ],
            "image" => ['nullable', 'image'],
            "description" => ['required', 'string'],
            "due_date" => ['nullable', 'date'],
            "status" => [
                'required',
                Rule::in(['pending', 'in_progress', 'completed']),
            ],
        ];
    }
}
