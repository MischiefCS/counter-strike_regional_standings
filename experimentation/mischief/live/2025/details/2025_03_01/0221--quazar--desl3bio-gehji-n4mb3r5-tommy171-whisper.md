### Roster Details<br />
Team Name: QUAZAR<br />
Roster: desl3bio, gehji, N4mb3r5, tommy171, whisper<br />
Global Rank: [221](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [143]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  651.4<br />
<br />
Final Rank Value (651.4) = Starting Rank Value (652.2) + Head To Head Adjustments (-0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 652.2
- 400 + ( ( 0.129 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 652.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1415 | 2024-12-15 | Premdesant       | L   | 0.692      | -            | -                | -                | -         |   -10.56 | desl3bio, gehji, N4mb3r5, tommy171, whisper |
|           11 |     1471 | 2024-12-14 | Playfire         | W   | 0.686      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.83 | desl3bio, gehji, N4mb3r5, tommy171, whisper |
|           10 |     2637 | 2024-11-16 | FLuffy Gangsters | W   | 0.499      | 0.143        | 0.013 (0.001)    | 0.560 (0.040)    | 0 (0.000) |     9.97 | gehji, Muk0s, N4mb3r5, tommy171, whisper    |
|            9 |     2651 | 2024-11-16 | Premdesant       | L   | 0.498      | -            | -                | -                | -         |    -7.97 | gehji, Muk0s, N4mb3r5, tommy171, whisper    |
|            8 |     2660 | 2024-11-16 | Nuclear TigeRES  | W   | 0.497      | 0.143        | 0.004 (0.000)    | 0.344 (0.024)    | 0 (0.000) |     7.99 | gehji, Muk0s, N4mb3r5, tommy171, whisper    |
|            7 |     3290 | 2024-10-31 | 1win             | L   | 0.393      | -            | -                | -                | -         |    -6.03 | gehji, Muk0s, N4mb3r5, tommy171, whisper    |
|            6 |     4325 | 2024-09-21 | Rhyno Esports    | L   | 0.124      | -            | -                | -                | -         |    -1.89 | gehji, Muk0s, N4mb3r5, tommy171, whisper    |
|            5 |     4411 | 2024-09-18 | Team Space       | L   | 0.106      | -            | -                | -                | -         |    -2.38 | gehji, Muk0s, N4mb3r5, tommy171, whisper    |
|            4 |     4455 | 2024-09-17 | ENCE Academy     | W   | 0.097      | 0.143        | 0.009 (0.000)    | 0.545 (0.008)    | 0 (0.000) |     2.04 | gehji, Muk0s, N4mb3r5, tommy171, whisper    |
|            3 |     4510 | 2024-09-14 | Nexus Gaming     | L   | 0.080      | -            | -                | -                | -         |    -0.14 | gehji, Muk0s, N4mb3r5, tommy171, whisper    |
|            2 |     4649 | 2024-09-10 | TALON            | W   | 0.052      | 0.143        | 0.000 (0.000)    | 0.255 (0.002)    | 0 (0.000) |     0.60 | gehji, Muk0s, N4mb3r5, tommy171, whisper    |
|            1 |     4673 | 2024-09-09 | Rhyno Esports    | W   | 0.045      | 0.143        | 0.002 (0.000)    | 0.063 (0.000)    | 0 (0.000) |     0.73 | gehji, Muk0s, N4mb3r5, tommy171, whisper    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,639.03)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.692 | $1,452.65      | $1,005.56       |
| 2024-11-03 |      0.413 | $1,532.61      | $633.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
