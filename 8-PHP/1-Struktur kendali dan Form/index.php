<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">

    <title>Tugas 1 - Struktur Kendali dan Form</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f8f9fa;
        }

        .form-container {
            width: 100%;
            max-width: 400px;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        h1 {
            text-align: center;
            font-weight: bold;
            margin-bottom: 15px;
            border-bottom: 4px solid #007bff;
            padding-bottom: 10px;
        }

        label {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="form-container" style="max-width: 500px;">
        <h1>Form Nilai Ujian</h1>
        <form method="POST" action="">
            <div class="form-group mb-3">
                <label class="mb-2" for="nama">Nama</label>
                <input type="text" class="form-control" id="nama" name="nama" placeholder="Masukkan nama" required>
            </div>
            <div class="form-group mb-3">
                <label class="mb-2" for="email">Alamat Email</label>
                <input type="email" class="form-control" id="email" name="email" title="nama@email.com" placeholder="Masukkan alamat email" required>
            </div>
            <div class="form-group mb-3">
                <label class="mb-2" for="nilai">Nilai Ujian</label>
                <input type="number" class="form-control" id="nilai" name="nilai" placeholder="Masukkan nilai ujian" required>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary w-100">Submit</button>
            </div>
        </form>

        <?php
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $nama = $_POST['nama'];
            $email = $_POST['email'];
            $nilai = $_POST['nilai'];

            if ($nilai > 70) {
                $keterangan = "Lulus";
            } else {
                $keterangan = "Remedial";
            }

            echo "<hr><h5 class='fw-bold d-flex justify-content-between align-items-center'>";
            echo "Detail Submit";
            echo "<a href='' class='btn btn-sm' title='Tutup'><i class='bi bi-x-lg'></i></a>";
            echo "</h5>";
            echo "<div class='border rounded p-3 bg-light'>";
            echo "<p><strong>Nama:</strong> $nama" . "</p>";
            echo "<p><strong>Email:</strong> $email" . "</p>";
            echo "<p><strong>Nilai Ujian:</strong> $nilai</p>";
            echo "<p><strong>Keterangan:</strong> $keterangan</p>";
            echo "</div>";
        }
        ?>
    </div>
</body>
</html>
