### Roster Details<br />
Team Name: Northern Lights<br />
Roster: Axelen, meinz, vaggio, ziz, Zypno<br />
Global Rank: [591](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [367]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  394.9<br />
<br />
Final Rank Value (394.9) = Starting Rank Value (400.1) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.1
- 400 + ( ( 0.000 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 400.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     3330 | 2024-11-12 | Lemondogs            | L   | 0.480      | -            | -                | -                | -         |    -7.43 | Axelen, meinz, vaggio, ziz, Zypno |
|            8 |     4077 | 2024-10-30 | Lilmix               | L   | 0.393      | -            | -                | -                | -         |    -4.15 | Axelen, meinz, vaggio, ziz, Zypno |
|            7 |     4395 | 2024-10-24 | Deathsquad           | W   | 0.353      | 0.143        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     5.52 | Axelen, meinz, vaggio, ziz, Zypno |
|            6 |     4774 | 2024-10-16 | Lagby Gooners        | W   | 0.299      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.68 | Axelen, meinz, vaggio, ziz, Zypno |
|            5 |     5039 | 2024-10-11 | NIP Svea             | L   | 0.265      | -            | -                | -                | -         |    -4.19 | Axelen, meinz, vaggio, ziz, Zypno |
|            4 |     5350 | 2024-10-05 | Back2TheGame         | L   | 0.226      | -            | -                | -                | -         |    -0.86 | Axelen, H0TI, meinz, vaggio, ziz  |
|            3 |     5632 | 2024-10-01 | Privateshow          | L   | 0.199      | -            | -                | -                | -         |    -2.09 | Axelen, meinz, vaggio, ziz, Zypno |
|            2 |     6619 | 2024-09-17 | Regeltre             | W   | 0.106      | 0.143        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     1.67 | Axelen, meinz, vaggio, ziz, Zypno |
|            1 |     6813 | 2024-09-14 | Venom (Swedish team) | W   | 0.084      | 0.143        | 0.000 (0.000)    | 0.068 (0.001)    | 0 (0.000) |     1.72 | Axelen, meinz, vaggio, ziz, Zypno |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
