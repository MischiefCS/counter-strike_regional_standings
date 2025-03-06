### Roster Details<br />
Team Name: Exceritus<br />
Roster: Antuanette, BabyRage, SJR, Slayerhz, zockie<br />
Global Rank: [205](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [61]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  527.4<br />
<br />
Final Rank Value (527.4) = Starting Rank Value (501.4) + Head To Head Adjustments (26.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.4
- 400 + ( ( 0.049 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 501.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      291 | 2025-02-13 | NRG          | L   | 0.845      | -            | -                | -                | -         |    -2.21 | Antuanette, BabyRage, SJR, Slayerhz, zockie |
|            6 |      349 | 2025-02-10 | Chill Guys   | W   | 0.827      | 0.143        | 0.001 (0.000)    | 0.132 (0.016)    | 0 (0.000) |    15.69 | Antuanette, BabyRage, SJR, Slayerhz, zockie |
|            5 |      355 | 2025-02-10 | InControl    | W   | 0.826      | 0.143        | 0.000 (0.000)    | 0.066 (0.008)    | 0 (0.000) |    15.80 | Antuanette, BabyRage, SJR, Slayerhz, zockie |
|            4 |      392 | 2025-02-09 | FlyQuest RED | W   | 0.819      | 0.143        | 0.005 (0.001)    | 0.005 (0.001)    | 0 (0.000) |    16.91 | Antuanette, BabyRage, SJR, Slayerhz, zockie |
|            3 |      440 | 2025-02-08 | Chill Guys   | L   | 0.812      | -            | -                | -                | -         |    -9.12 | Antuanette, BabyRage, SJR, Slayerhz, zockie |
|            2 |      839 | 2024-12-15 | Nitro.GG     | L   | 0.447      | -            | -                | -                | -         |    -4.30 | Antuanette, BabyRage, SJR, Slayerhz, zockie |
|            1 |      865 | 2024-12-14 | 9z Academy   | L   | 0.439      | -            | -                | -                | -         |    -6.75 | Antuanette, BabyRage, SJR, Slayerhz, zockie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
