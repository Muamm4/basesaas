<?php

namespace App\Traits;

trait HasTruncatableData
{
    /**
     * Recursively reduce large strings in arrays to a specified maximum length.
     *
     * @param mixed $data
     * @param int $maxLength
     * @return mixed
     */
    protected function reduceLargeElements($data, int $maxLength = 75)
    {
        if (!is_array($data) && !is_object($data)) {
            return (is_string($data) && strlen($data) > $maxLength)
                ? substr($data, 0, $maxLength) . '...'
                : $data;
        }

        foreach ($data as $key => $value) {
            if (is_string($value) && strlen($value) > $maxLength) {
                $data[$key] = substr($value, 0, $maxLength) . '...';
            } elseif (is_array($value) || is_object($value)) {
                $data[$key] = $this->reduceLargeElements($value, $maxLength);
            }
        }

        return $data;
    }
}
