### Roster Details<br />
Team Name: Fluxo Demons<br />
Roster: annaEX, goddess, josi, poppins, yungher<br />
Global Rank: [107](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [22]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  723.8<br />
<br />
Final Rank Value (723.8) = Starting Rank Value (729.2) + Head To Head Adjustments (-5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.095[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.2
- 400 + ( ( 0.159 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 729.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1129 | 2024-12-01 | FURIA Esports Female | L   | 0.352      | -            | -                | -                | -         |    -2.86 | annaEX, goddess, josi, poppins, yungher |
|            7 |     1152 | 2024-11-30 | MIBR Female          | W   | 0.345      | 0.143        | 0.002 (0.000)    | 0.005 (0.000)    | 1 (0.345) |     3.75 | annaEX, goddess, josi, poppins, yungher |
|            6 |     1158 | 2024-11-30 | FURIA Esports Female | L   | 0.344      | -            | -                | -                | -         |    -2.76 | annaEX, goddess, josi, poppins, yungher |
|            5 |     1281 | 2024-11-23 | Eco Warriors         | L   | 0.298      | -            | -                | -                | -         |    -4.27 | annaEX, goddess, josi, poppins, yungher |
|            4 |     1307 | 2024-11-22 | Imperial Female      | L   | 0.291      | -            | -                | -                | -         |    -1.96 | annaEX, goddess, josi, poppins, yungher |
|            3 |     1316 | 2024-11-22 | FlyQuest RED         | W   | 0.290      | 0.524        | 0.005 (0.001)    | 0.005 (0.001)    | 1 (0.290) |     3.32 | annaEX, goddess, josi, poppins, yungher |
|            2 |     1880 | 2024-10-18 | FURIA Esports Female | L   | 0.059      | -            | -                | -                | -         |    -0.49 | annaEX, goddess, josi, poppins, yungher |
|            1 |     1981 | 2024-10-12 | FURIA Esports Female | L   | 0.018      | -            | -                | -                | -         |    -0.15 | annaEX, goddess, josi, poppins, yungher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,751.83)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-01 |      0.353 | $1,673.82      | $590.25         |
| 2024-11-24 |      0.304 | $7,000.00      | $2,130.14       |
| 2024-10-12 |      0.018 | $1,782.12      | $31.43          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
